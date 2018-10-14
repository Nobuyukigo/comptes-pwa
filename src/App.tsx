import * as firebase from 'firebase';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from 'styled-components';

import { loginWithFacebook } from './utils/login-with-facebook';

import Home from './screens/Home';
import Statistics from './screens/Statistics';

import { Expense, Group, User } from './utils/models';

import {
  FACEBOOK_ID,
  FIREBASE_BUCKET,
  FIREBASE_DB_URL,
  FIREBASE_DOMAIN,
  FIREBASE_KEY
} from './config';
import moveBetweenMonths from './utils/move-between-months/move-between-months';
import sortExpensesByMonth from './utils/sort-expenses-by-month/sort-expenses-by-month';

const ContentWrapper = styles.div`
	height: 100%
	width: 100%
`;

interface AppState {
  authenticated: boolean;
  loadingFriends: boolean;
  loadingUser: boolean;
  loadingExpensesPaid: boolean;
  loadingExpensesShared: boolean;
  expensesPaid: Expense[];
  expensesShared: Expense[];
  user?: User;
  selectedMonth: string;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      authenticated: false,
      loadingFriends: true,
      loadingUser: true,
      loadingExpensesPaid: true,
      loadingExpensesShared: true,
      expensesPaid: [],
      expensesShared: [],
      user: undefined,
      selectedMonth: new Date().toJSON().slice(0, 7)
    };

    const firebaseConfig = {
      apiKey: FIREBASE_KEY,
      authDomain: FIREBASE_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      storageBucket: FIREBASE_BUCKET
    };

    firebase.initializeApp(firebaseConfig);
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser && firebaseUser.uid && firebaseUser.displayName) {
        this.setState({
          authenticated: true,
          loadingUser: false,
          user: {
            avatar: firebaseUser.photoURL || undefined,
            id: firebaseUser.uid,
            name: firebaseUser.displayName
          }
        });

        this.getGroupData(firebaseUser.uid);
        this.loadUserExpenses(firebaseUser.uid);

        this.state.user &&
          this.state.user.group &&
          this.state.user.id &&
          this.getFriendData(this.state.user.id, this.state.user.group);
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

  disconnect = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.setState({ user: {} }))
      .catch((err) => console.error(err));
  };

  loadUserExpenses(id: string) {
    const expensesRef = firebase
      .database()
      .ref()
      .child('expenses');

    const expensesPaidRef = expensesRef.orderByChild('whoPaid').equalTo(id);
    const expensesSharedRef = expensesRef
      .orderByChild('sharedWith')
      .equalTo(id);

    expensesPaidRef.on('value', (snapshot) => {
      const expenses = this.extractExpenses(snapshot);
      this.setState({
        expensesPaid: expenses,
        loadingExpensesPaid: false
      });
    });

    expensesSharedRef.on('value', (snapshot) => {
      const expenses = this.extractExpenses(snapshot);
      this.setState({
        expensesShared: expenses,
        loadingExpensesShared: false
      });
    });

    // expensesSharedRef.off();
    // expensesPaidRef.off();
  }

  extractExpenses(snapshot: any) {
    return Object.keys(snapshot.val()).map((id) => ({
      ...snapshot.val()[id],
      id
    }));
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

  handleMonthSelection = (value: -1 | 1) => {
    this.setState((prevState) => ({
      selectedMonth: moveBetweenMonths(prevState.selectedMonth, value)
    }));
  };

  render() {
    const {
      authenticated,
      loadingUser,
      user,
      expensesPaid,
      expensesShared,
      selectedMonth
    } = this.state;
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
      const expenses = [...expensesPaid, ...expensesShared];
      const expensesSortedByMonth = sortExpensesByMonth(expenses);
      const expensesOfTheMonth = expensesSortedByMonth[selectedMonth] || [];

      return (
        user && (
          <ContentWrapper>
            <Router>
              <div style={{ width: '100%', height: '100%' }}>
                <Route
                  exact={true}
                  path="/"
                  // tslint:disable-next-line jsx-no-lambda
                  render={(props) => (
                    <Home
                      {...props}
                      expenses={expensesOfTheMonth}
                      handleMonthSelection={this.handleMonthSelection}
                      user={user}
                      selectedMonth={selectedMonth}
                    />
                  )}
                />
                <Route
                  exact={true}
                  path="/stats"
                  // tslint:disable-next-line jsx-no-lambda
                  render={(props) => (
                    <Statistics
                      {...props}
                      user={user}
                      disconnect={this.disconnect}
                    />
                  )}
                />
              </div>
            </Router>
          </ContentWrapper>
        )
      );
    }
  }
}

export default App;
