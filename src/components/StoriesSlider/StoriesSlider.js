import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {MyStory, StoryCircle, CIRCLE_TYPES} from '../';

export const StoriesSlider = ({stories}) => {
  return (
    <View style={styles.storiesSlider}>
      <MyStory image={stories[0]} />
      <StoryCircle type={CIRCLE_TYPES.LIVE_STORY} image={stories[1]} />
      <StoryCircle type={CIRCLE_TYPES.REGULAR_STORY} image={stories[2]} />
      <StoryCircle
        type={CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY}
        image={stories[3]}
      />
    </View>
  );
};
