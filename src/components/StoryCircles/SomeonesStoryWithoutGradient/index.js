import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

export const CIRCLE_TYPES = {
  REGULAR_STORY: 'regularStory',
  BESTFRIEND_REGULAR_STORY: 'bestfriendRegularStory',
  LIVE_STORY: 'live',
};

const getColor = (type) => {
  switch (type) {
    case CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY:
      return '#73DA3F';
    case CIRCLE_TYPES.LIVE_STORY:
      return '#7910C3';
    case CIRCLE_TYPES.REGULAR_STORY:
      return '#FBA142';
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

export const SomeonesStoryWithoutGradient = ({
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
        <View
          style={styles.externalCircle(
            isMini ? SIZE_FOR_POST_HEADER : SIZE_FOR_SLIDER,
            getColor(type),
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

          {type === CIRCLE_TYPES.LIVE_STORY ? (
            <View style={styles.textWrapper}>
              <Text style={styles.text}>VIVO</Text>
            </View>
          ) : null}
        </View>

        {isMini ? null : (
          <Text style={styles.userName}>{generateUsername(userName)}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
