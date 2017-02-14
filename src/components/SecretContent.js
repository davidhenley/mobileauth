import React from 'react';
import { Card, CardSection } from './common';
import { View, Text } from 'react-native'

const SecretContent = () => {
  return (
    <Card>
      <CardSection>
        <Text>Secret Content. {"\n"}You can only see this if you are logged in.</Text>
      </CardSection>
    </Card>
  );
}

export default SecretContent;
