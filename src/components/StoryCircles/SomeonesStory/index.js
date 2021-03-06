import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export const CIRCLE_TYPES = {
  REGULAR_STORY: 'regularStory',
  BESTFRIEND_REGULAR_STORY: 'bestfriendRegularStory',
  LIVE_STORY: 'live',
};

const getGradient = (type) => {
  switch (type) {
    case CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY:
      return ['#72D83F', '#61Ca20'];
    case CIRCLE_TYPES.LIVE_STORY:
      return ['#8E01C8', '#C402B2', '#EA013F'];
    case CIRCLE_TYPES.REGULAR_STORY:
      return ['#9E0089', '#CD0E66', '#E53D35', '#F77A21', '#FAAA49'];
  }
};

const getAngle = (type) => {
  switch (type) {
    case CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY:
      return {
        start: {x: 0.0, y: 0.25},
        end: {x: 0.0, y: 0.25},
      };
    case CIRCLE_TYPES.LIVE_STORY:
      return {
        start: {x: 0.0, y: 0.25},
        end: {x: 0.5, y: 1.0},
      };
    case CIRCLE_TYPES.REGULAR_STORY:
      return {
        start: {x: 0.25, y: 0.0},
        end: {x: 0.0, y: 0.25},
      };
  }
};

const SIZE_FOR_SLIDER = 70;
const SIZE_FOR_POST_HEADER = 38;

const USERNAME_CHAR_LIMIT = 9;
const generateUsername = (userName) => {
  let newUsername = userName.slice(0, USERNAME_CHAR_LIMIT);

  if (userName.length > USERNAME_CHAR_LIMIT)
    return newUsername.trim().concat('...');

  return newUsername;
};

export const SomeonesStory = ({
  image,
  userName,
  type,
  isMini,
  onHandlePress,
}) => {
  return (
    <TouchableWithoutFeedback
      delayPressIn={50}
      onPressIn={onHandlePress ? onHandlePress : null}>
      <View style={styles.someonesStoryWrapper(isMini)}>
        <LinearGradient
          {...getAngle(type)}
          colors={getGradient(type)}
          style={styles.linearGradient(
            isMini ? SIZE_FOR_POST_HEADER : SIZE_FOR_SLIDER,
          )}>
          <View
            style={styles.circleWrapper(
              SIZE_FOR_SLIDER,
              type === CIRCLE_TYPES.LIVE_STORY,
            )}>
            <Image
              style={styles.photo(SIZE_FOR_SLIDER)}
              source={{uri: image}}
            />
          </View>
        </LinearGradient>
        {type === CIRCLE_TYPES.LIVE_STORY ? (
          <LinearGradient
            {...getAngle(CIRCLE_TYPES.LIVE_STORY)}
            colors={['#D20297', '#E20248']}
            style={styles.textWrapper}>
            <Text style={styles.text}>VIVO</Text>
          </LinearGradient>
        ) : null}
        {isMini ? null : (
          <Text style={styles.userName}>{generateUsername(userName)}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
