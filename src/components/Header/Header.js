import React from 'react';
import {View} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';
import Logo from '../../assets/images/Logo.svg';

export const Header = () => {
  return (
    <View style={styles.HeaderWrapper}>
      <SimpleLineIcons name="camera" size={25} color="black" />
      <Logo width={100} height={30} />
      <SimpleLineIcons name="heart" size={25} color="black" />
    </View>
  );
};
