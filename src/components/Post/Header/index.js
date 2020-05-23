import React from 'react';

import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {RegularStory} from '../../StoryCircles/RegularStory/RegularStory';

const Header = ({userName, userPicture, location}) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.userWrapper}>
        <RegularStory isMini={true} image={userPicture} />
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
