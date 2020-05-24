import React from 'react';

import {View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';

import styles from './styles';

const OptionsBar = () => {
  return (
    <View style={styles.optionsBarWrapper}>
      <View style={styles.groupOptions}>
        <SimpleLineIcons name="heart" size={25} color="black" />
        <FontAwesome name="comment-o" size={25} color="black" />
        <FeatherIcons name="send" size={25} color="black" />
      </View>
      <FontAwesome name="bookmark-o" size={25} color="black" />
    </View>
  );
};

export default OptionsBar;
