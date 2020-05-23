import React from 'react';
import {View, Image, Text} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

export const MyStory = ({image}) => {
  return (
    <View style={styles.myStoryWrapper}>
      <View style={styles.circleWrapper}>
        <Image style={styles.photo} source={{uri: image}} />
        <View style={styles.circleIcon}>
          <Fontisto name="plus-a" size={11} color="white" />
        </View>
      </View>
      <Text style={styles.text}>Tu historia</Text>
    </View>
  );
};
