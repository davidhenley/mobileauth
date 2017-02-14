import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onLoginSuccess() {
    this.setState({ error: '', loading: false, email: '', password: '' });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'user@example.com'}
            label={'email'} />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={'password'}
            secureTextEntry
            label={'password'} />
        </CardSection>

        {this.state.error !== '' && <Text style={styles.errorStyle}>{this.state.error}</Text>}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
