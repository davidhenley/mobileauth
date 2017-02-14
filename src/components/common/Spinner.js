import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export { Spinner };
