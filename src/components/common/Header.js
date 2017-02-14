import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
  render() {
    const { container, headerText } = styles;
    return (
      <View style={container}>
        <Text style={headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  }
}

export { Header };
