import React, { Component } from 'react';
import  { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB4lx8f129_MbNpZw4Yo79mwLHu1EFV0nI',
      authDomain: 'react-native-auth-38809.firebaseapp.com',
      databaseURL: 'https://react-native-auth-38809.firebaseio.com',
      storageBucket: 'react-native-auth-38809.appspot.com',
      messagingSenderId: '403343583227'
    });
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
