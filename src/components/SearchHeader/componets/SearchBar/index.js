import React from 'react';
import {View, TextInput} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';

import styles from './styles';

export const SearchBar = () => {
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchInputWrapper}>
        <FeatherIcons name="search" size={15} color="#989898" />
        <TextInput placeholder="Buscar" style={styles.searchInput} />
      </View>
      <AntDesign name="scan1" size={20} color="black" />
    </View>
  );
};
