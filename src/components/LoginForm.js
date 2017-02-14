import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    console.log(this.state);
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

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
