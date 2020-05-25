import React from 'react';
import {View, Text} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export const FilterButton = ({text}) => (
  <View style={styles.filterButton}>
    {text === 'IGTV' ? (
      <MaterialIcons name="live-tv" size={20} color="black" />
    ) : null}
    {text === 'Tienda' ? (
      <MaterialCommunityIcons name="shopping" size={20} color="black" />
    ) : null}
    <Text style={styles.filterButtonText}>{text}</Text>
  </View>
);
