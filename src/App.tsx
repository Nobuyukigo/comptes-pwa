import * as firebase from 'firebase';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from 'styled-components';

import { loginWithFacebook } from './utils/login-with-facebook';

import './App.css';

import { Routes } from './routes';

import { Group, User } from './utils/models';

// import logo from './logo.svg';

import {
  FACEBOOK_ID,
  FIREBASE_BUCKET,
  FIREBASE_DB_URL,
  FIREBASE_DOMAIN,
  FIREBASE_KEY
} from './config';

const ContentWrapper = styles.div`
	height: 100%
	width: 100%
`;

interface AppState {
  authenticated: boolean;
  loadingFriends: boolean;
  loadingUser: boolean;
  user?: User;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      authenticated: false,
      loadingFriends: true,
      loadingUser: true,
      user: undefined
    };

    const firebaseConfig = {
      apiKey: FIREBASE_KEY,
      authDomain: FIREBASE_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      storageBucket: FIREBASE_BUCKET
    };

    firebase.initializeApp(firebaseConfig);

    // user &&
    //   groupsRef.once('value', (snapshot) => {
    //     const groups: Group[] = snapshot
    //       .val()
    //       .filter((item: Group) => item[user.id]);
    //     const group = groups[0];

    //     this.state = {
    //       ...this.state,
    //       user: {
    //         ...user,
    //         group
    //       }
    //     };

    //     groups.length > 0 && this.getFriendData(user.id, group);
    //   });
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.uid && user.displayName) {
        this.setState({
          authenticated: true,
          loadingUser: false,
          user: {
            avatar: user.photoURL || undefined,
            id: user.uid,
            name: user.displayName
          }
        });

        this.getGroupData(user.uid);
        this.state.user &&
          this.state.user.group &&
          this.getFriendData(user.uid, this.state.user.group);
      } else {
        this.setState({
          authenticated: false,
          loadingUser: false
        });
        console.error('User not identified');
      }
    });
  }

  fbAuthCallback(fbData: any) {
    loginWithFacebook(fbData.accessToken);
  }

  getGroupData(userId: string) {
    const groupsRef = firebase
      .database()
      .ref()
      .child('groups');

    groupsRef
      .once('value')
      .then((snapshot) => {
        const groups: Group[] = snapshot
          .val()
          .filter((item: Group) => item[userId]);

        const group = groups[0];
        this.getFriendData(userId, group);
        this.setState({
          user: {
            ...this.state.user,
            group
          }
        });
      })
      .catch((err) => {
        this.setState({ loadingFriends: false });
        console.error(err);
      });
  }

  getFriendData(userId: string, group: Group) {
    const groupMemberIds = Object.keys(group);
    const friends = groupMemberIds.filter((id) => id !== userId);

    friends.forEach((id) => {
      firebase
        .database()
        .ref(`users/${id}`)
        .once('value')
        .then((snapshot) => {
          this.setState({
            loadingFriends: false,
            user: {
              ...this.state.user,
              friend: {
                id,
                ...snapshot.val()
              }
            }
          });
        })
        .catch((err) => {
          this.setState({ loadingFriends: false });
          console.error(err);
        });
    });
  }

  render() {
    const { authenticated, loadingUser } = this.state;
    const loading = loadingUser;

    if (loading) {
      return <div>Loading</div>;
    } else if (!authenticated && FACEBOOK_ID) {
      return (
        <FacebookLogin
          appId={FACEBOOK_ID}
          fields="name,picture"
          autoLoad={true}
          callback={this.fbAuthCallback}
        />
      );
    } else {
      return (
        <ContentWrapper>
          <Router>
            <Routes />
          </Router>
        </ContentWrapper>
      );
    }
  }
}

export default App;
