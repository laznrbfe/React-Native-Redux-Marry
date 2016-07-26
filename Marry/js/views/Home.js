// Home.js

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Img from '../common/Img';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          推荐
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
