import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  hr: {
    flex: 2,
    width: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  textWrapper: {
    flex: 1,
  },
  textWrapperAbs: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: 2,
    backgroundColor: 'red',
    position: 'absolute'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});

export class OrBlock extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.hr}></View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>OR</Text>
        </View>
        <View style={styles.hr}></View>
      </View>
    );
  }
}

export default OrBlock;
