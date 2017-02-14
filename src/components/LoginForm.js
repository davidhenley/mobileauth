import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            placeholder={'email'}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }} />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;