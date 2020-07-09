import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>This is the home screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
