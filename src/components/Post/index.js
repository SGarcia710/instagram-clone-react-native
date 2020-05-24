import React from 'react';

import {View} from 'react-native';

import Header from './Header';
import MediaViewer from './MediaViewer';
import OptionsBar from './OptionsBar';
import LikesBar from './LikesBar';
import Description from './Description';
import Comments from './Comments';

export const Post = ({data}) => {
  const shouldRenderDescription = Math.floor(Math.random() * (1 - 0 + 1) + 0);

  return (
    <View>
      <Header
        userName={data.userName}
        userPicture={data.userPicture}
        location={data.location}
      />
      <MediaViewer media={data.media} />
      <OptionsBar />
      <LikesBar likesCount={data.likes} />
      {shouldRenderDescription ? (
        <Description userName={data.userName} description={data.description} />
      ) : null}
      <Comments commentsCount={data.numberComments} />
    </View>
  );
};
