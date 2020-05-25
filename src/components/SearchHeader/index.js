import React from 'react';
import {View} from 'react-native';

import {FiltersSlider, SearchBar} from './componets';

import styles from './styles';

const SearchHeader = () => {
  return (
    <View style={styles.searchHeaderWrapper}>
      <SearchBar />
      <FiltersSlider />
    </View>
  );
};
export default SearchHeader;
