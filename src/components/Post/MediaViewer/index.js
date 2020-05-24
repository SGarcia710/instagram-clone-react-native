import React from 'react';
import {v4 as uuidv4} from 'uuid';

import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

import styles from './styles';

const MediaViewer = ({media}) => {
  return (
    <View style={styles.mediaViewerWrapper}>
      <Swiper loop={false} style={styles.wrapper}>
        {media.map((element) => {
          if (element.type === 'image')
            return (
              <Image
                key={() => uuidv4()}
                style={{height: '100%'}}
                source={{uri: element.url}}
              />
            );
          return (
            <Video
              key={() => uuidv4()}
              source={{uri: element.url}} // Can be a URL or a localfile.
              ref={(ref) => {
                this.player = ref;
              }} // Store reference
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              onEnd={this.onEnd} // Callback when playback finishes
              onError={this.videoError} // Callback when video cannot be loaded
              style={styles.backgroundVideo}
              resizeMode="cover"
              repeat={true}
            />
          );
        })}
      </Swiper>
    </View>
  );
};

export default MediaViewer;
