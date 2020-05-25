import React from 'react';

import {View} from 'react-native';

import Header from './Header';
import MediaViewer from './MediaViewer';
import OptionsBar from './OptionsBar';
import LikesBar from './LikesBar';
import Description from './Description';
import Comments from './Comments';
import Time from './Time';

import {getRandomNumber} from '../../utils';

const Post = ({data}) => {
  const shouldRenderSection = {
    description: getRandomNumber(0, 1),
    comments: getRandomNumber(0, 1),
  };

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
      {shouldRenderSection.description ? (
        <Description userName={data.userName} description={data.description} />
      ) : null}
      {shouldRenderSection.comments ? (
        <Comments commentsCount={data.numberComments} />
      ) : null}
      <Time />
    </View>
  );
};
export default React.memo(Post);
