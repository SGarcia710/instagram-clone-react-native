import React from 'react';

import {View} from 'react-native';

import Header from './Header';
import MediaViewer from './MediaViewer';
import OptionsBar from './OptionsBar';
import LikesBar from './LikesBar';
import Description from './Description';
import Comments from './Comments';

export const Post = ({data}) => {
  console.log(data);

  return (
    <View>
      <Header
        userName={data.userName}
        userPicture={data.userPicture}
        location={data.location}
      />
      <MediaViewer media={data.media} />
    </View>
  );
};
