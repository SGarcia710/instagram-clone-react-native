import React from 'react';

import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

const MediaViewer = ({media}) => {
  return (
    <View style={{height: 300}}>
      <Swiper loop={false} style={styles.wrapper}>
        {media.map((element) => {
          if (element.type === 'image')
            return (
              <Image style={{height: '100%'}} source={{uri: element.url}} />
            );
        })}
      </Swiper>
    </View>
  );
};
export default MediaViewer;
