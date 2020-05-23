import React from 'react';

import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

export default () => {
  return (
    <Swiper style={styles.wrapper} height={200}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};
