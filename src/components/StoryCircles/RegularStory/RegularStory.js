import React from 'react';
import {View, Image, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export const RegularStory = ({image, isBestfriend, isMini}) => {
  const getGradient = (isForBestfriend) => {
    return isForBestfriend
      ? ['#72D83F', '#61Ca20']
      : ['#9E0089', '#CD0E66', '#E53D35', '#F77A21', '#FAAA49'];
  };

  const getAngle = (isForBestfriend) => {
    return isForBestfriend
      ? {
          start: {x: 0.0, y: 0.25},
          end: {x: 0.0, y: 0.25},
        }
      : {
          start: {x: 0.25, y: 0.0},
          end: {x: 0.0, y: 0.25},
        };
  };

  return (
    <View style={styles.regularStoryWrapper}>
      <LinearGradient
        {...getAngle(isBestfriend)}
        colors={getGradient(isBestfriend)}
        style={styles.linearGradient(isMini ? 38 : 70)}>
        <View style={styles.circleWrapper}>
          <Image style={styles.photo} source={{uri: image}} />
        </View>
      </LinearGradient>
      {isMini ? null : <Text style={styles.userName}>Username</Text>}
    </View>
  );
};
