import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {MyStory, SomeonesStory, CIRCLE_TYPES} from '../';

export const StoriesSlider = ({stories}) => {
  return (
    <View style={styles.storiesSlider}>
      <MyStory image={stories[0]} />
      <SomeonesStory type={CIRCLE_TYPES.LIVE_STORY} image={stories[1]} />
      <SomeonesStory type={CIRCLE_TYPES.REGULAR_STORY} image={stories[2]} />
      <SomeonesStory
        type={CIRCLE_TYPES.BESTFRIEND_REGULAR_STORY}
        image={stories[3]}
      />
    </View>
  );
};
