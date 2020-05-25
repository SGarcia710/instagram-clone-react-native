import React from 'react';

import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {DOMAIN_PATH} from '../../../config';
import styles from './styles';
import {
  SomeonesStory,
  CIRCLE_TYPES,
  // SomeonesStoryWithoutGradient,
} from '../../';

const Header = ({userName, userPicture, location}) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.userWrapper}>
        <SomeonesStory
          type={CIRCLE_TYPES.REGULAR_STORY}
          isMini={true}
          image={`${DOMAIN_PATH}${userPicture}`}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{userName}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={20} color="black" />
    </View>
  );
};
export default Header;
