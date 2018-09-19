import * as firebase from 'firebase';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { loginWithFacebook } from './utils/login-with-facebook';

import './App.css';

import { Group, User } from './utils/models';

// import logo from './logo.svg';

import {
  FACEBOOK_ID,
  FIREBASE_BUCKET,
  FIREBASE_DB_URL,
  FIREBASE_DOMAIN,
  FIREBASE_KEY
} from './config';

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
      loadingUser: true
    };

    const firebaseConfig = {
      apiKey: FIREBASE_KEY,
      authDomain: FIREBASE_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      storageBucket: FIREBASE_BUCKET
    };

    firebase.initializeApp(firebaseConfig);

    // const groupsRef = firebase
    //   .database()
    //   .ref()
    //   .child('groups');

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

  componentDidMount() {
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
      } else {
        this.setState({
          authenticated: false,
          loadingUser: false
        });
        console.error('You are not a registered user');
      }
    });
  }

  fbAuthCallback(fbData: any) {
    loginWithFacebook(fbData.accessToken);
  }

  getFriendData = (userId: string, group: Group) => {
    const groupMemberIds = Object.keys(group);
    const friends = groupMemberIds.filter((id) => id !== userId);

    friends.forEach((id) => {
      firebase
        .database()
        .ref(`users/${id}`)
        .once('value')
        .then((snapshot) => {
          // this.setState({
          //   ...this.state,
          //   loadingFriends: false,
          //   user: {
          //     ...this.state.user,
          //     friend: {
          //       id,
          //       ...snapshot.val()
          //     }
          //   }
          // });
        })
        .catch((err) => {
          this.setState({ loadingFriends: false });
          console.error(err);
        });
    });
  };

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
        <div>
          Bonjour {this.state.user && this.state.user.name} tu es connecté
        </div>
      );
    }
  }
}

export default App;
