import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar, ScrollView,
  Dimensions, Text, SafeAreaView
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const styles = {
  wrapper: {
    backgroundColor: 'blue',
    flex: 1,
    position: 'relative'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  }
};

export default class extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >

        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <Text>silder</Text>
          <ScrollView style={{ flex: 1, flexWrap: 'nowrap', backgroundColor: 'red' }} >
            <Swiper height={200} horizontal={false} autoplay style={styles.wrapper}
              dot={<View style={{
                backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7
              }} />}
              activeDot={<View style={{
                backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7
              }} />}
              paginationStyle={{
                bottom: 70
              }}
              loop={false}>
              <View style={styles.slide}>
                <Text>one</Text>
              </View>
              <View style={styles.slide}>
                <Text>two</Text>
              </View>
              <View style={styles.slide}>
                <Text>threge</Text>
              </View>
            </Swiper>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
