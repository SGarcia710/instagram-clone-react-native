import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import {FilterButton} from '../';
import {ScrollView} from 'react-native-gesture-handler';

const filterNames = [
  'IGTV',
  'Tienda',
  'Decoración',
  'Arquitectura',
  'Arte',
  'Naturaleza',
  'Estilo',
  'TV y cine',
  'Música',
  'Cómics',
  'Humor',
  'Manualidades',
  'Deportes',
  'Autos',
];

export const FiltersSlider = () => {
  const renderFilterButton = ({item, index}) => {
    return <FilterButton text={item} />;
  };

  return (
    <View style={styles.filtersSliderWrapper}>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filterNames.map((name) => (
          <FilterButton text={name} />
        ))}
      </ScrollView> */}

      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        data={filterNames}
        renderItem={renderFilterButton}
      />
    </View>
  );
};
