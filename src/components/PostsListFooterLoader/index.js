import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

const PostsListFooterLoader = () => {
  return (
    <View style={styles.postsListFooterLoaderWrapper}>
      {/* I dont know how is the Instagram activity indicator, but, it could be a good option to implement a lottie loading animation here 😁😁 */}
      <ActivityIndicator size="large" />
    </View>
  );
};

export default PostsListFooterLoader;
