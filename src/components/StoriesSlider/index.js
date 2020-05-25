import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';
import {
  MyStory,
  SomeonesStory,
  CIRCLE_TYPES,
  // SomeonesStoryWithoutGradient,
} from '../';

import {DOMAIN_PATH} from '../../config';

export const StoriesSlider = ({stories, handleStoryItemPress}) => {
  const renderStoryItem = ({item, index}) => {
    return (
      <SomeonesStory
        key={item.toString()}
        onHandlePress={() => handleStoryItemPress(item, index)}
        type={
          index % 2 === 0
            ? CIRCLE_TYPES.REGULAR_STORY
            : CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY
        }
        image={`${DOMAIN_PATH}${item.user.pictureUrl}`}
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
            {/* <MyStory image={`${DOMAIN_PATH}/static/profile-photos/1.jpg`} /> */}
            <MyStory
              // :) This was really cool!
              image={
                'https://media-exp1.licdn.com/dms/image/C4E0BAQEhMwC_ga9SGA/company-logo_200_200/0?e=1598486400&v=beta&t=hUp8bjGyp-N0Ltd7G9EgB6SHx0lg8Nuo_YzNgaGQakg'
              }
            />
            <SomeonesStory
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
