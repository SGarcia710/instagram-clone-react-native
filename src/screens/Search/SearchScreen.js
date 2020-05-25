import React from 'react';

import {View, Text, Image} from 'react-native';
import GridList from 'react-native-grid-list';

import {SearchHeader} from '../../components';

import styles from './styles';
import {DOMAIN_PATH} from '../../config';

const items = [
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/1.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/2.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/3.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/4.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/5.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/6.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/7.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/8.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/9.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/10.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/11.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/12.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/13.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/14.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/15.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/16.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/17.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/18.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/19.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/20.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/21.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/22.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/23.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/24.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/25.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/26.jpg`}},
  {thumbnail: {uri: `${DOMAIN_PATH}/static/posts/27.jpg`}},
];

const renderItem = ({item, index}) => (
  <Image style={styles.image} source={item.thumbnail} />
);

function SearchScreen() {
  return (
    <View style={styles.homeScreenWrapper}>
      <GridList
        ListHeaderComponent={<SearchHeader />}
        data={items}
        numColumns={3}
        renderItem={renderItem}
      />
    </View>
  );
}

export default SearchScreen;
