import React, { Component } from 'react';
import  { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import SecretContent from './components/SecretContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB4lx8f129_MbNpZw4Yo79mwLHu1EFV0nI',
      authDomain: 'react-native-auth-38809.firebaseapp.com',
      databaseURL: 'https://react-native-auth-38809.firebaseio.com',
      storageBucket: 'react-native-auth-38809.appspot.com',
      messagingSenderId: '403343583227'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <View>
            <SecretContent />
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
            </CardSection>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
