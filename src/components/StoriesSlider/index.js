import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {
  MyStory,
  // SomeonesStory,
  CIRCLE_TYPES,
  SomeonesStoryWithoutGradient,
} from '../';

import {DOMAIN_PATH} from '../../config';
import {FlatList} from 'react-native';

export const StoriesSlider = ({stories, handleStoryItemPress}) => {
  const renderStoryItem = ({item, index}) => {
    return (
      <SomeonesStoryWithoutGradient
        key={item.toString()}
        onHandlePress={() => handleStoryItemPress(item, index)}
        type={
          index % 2 === 0
            ? CIRCLE_TYPES.REGULAR_STORY
            : CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY
        }
        image={item.user.pictureUrl}
        userName={item.user.userName}
      />
    );
  };

  return (
    <View style={styles.storiesSlider}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <MyStory image={`${DOMAIN_PATH}/static/profile-photos/1.jpg`} />
            <SomeonesStoryWithoutGradient
              type={CIRCLE_TYPES.LIVE_STORY}
              image="https://pbs.twimg.com/profile_images/1229514235010572289/PJ7AAlBE_400x400.jpg"
              userName="dondiablo"
            />
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        data={stories}
        renderItem={renderStoryItem}
      />
    </View>
  );
};
