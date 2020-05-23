import React from 'react';
import {View, Image, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

export const Live = ({image}) => {
  return (
    <View style={styles.liveWrapper}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#8E01C8', '#C402B2', '#EA013F']}
        style={styles.linearGradient}>
        <View style={styles.circleWrapper}>
          <Image style={styles.photo} source={{uri: image}} />
        </View>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['#D20297', '#E20248']}
          style={styles.textWrapper}>
          <Text style={styles.text}>VIVO</Text>
        </LinearGradient>
      </LinearGradient>
      <Text style={styles.userName}>Username</Text>
    </View>
  );
};
