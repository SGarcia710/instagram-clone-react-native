import React from 'react';

import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

import styles from './styles';
import {DOMAIN_PATH} from '../../../config';

const renderMediaElement = (element) => {
  if (element.type === 'image')
    return (
      <Image
        key={element.toString()}
        style={{height: '100%'}}
        source={{uri: element.url}}
      />
    );
  return (
    <Video
      key={element.toString()}
      source={{uri: `${DOMAIN_PATH}${element.url}`}}
      ref={(ref) => {
        this.player = ref;
      }}
      muted
      onBuffer={this.onBuffer}
      onEnd={this.onEnd}
      onError={this.videoError}
      style={styles.backgroundVideo}
      on
      resizeMode="cover"
      repeat={true}
    />
  );
};

const MediaViewer = ({media}) => {
  return (
    <View style={styles.mediaViewerWrapper}>
      {media.length > 1 ? (
        <Swiper
          loop={false}
          style={styles.wrapper}
          paginationStyle={styles.paginationDots}>
          {media.map((element) => {
            return renderMediaElement(element);
          })}
        </Swiper>
      ) : (
        renderMediaElement(media[0])
      )}
    </View>
  );
};

export default MediaViewer;
