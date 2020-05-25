import React, {PureComponent} from 'react';
import {View, Image} from 'react-native';

import styles from './styles';
import {DOMAIN_PATH} from '../../../../config';
import {Avatar} from '../';

export class StoryItem extends PureComponent {
  render() {
    const {
      story: {url, user, _id},
      selectedStory,
      handleSelectedStoryOnLoaded,
      footerComponent,
    } = this.props;

    return (
      <>
        <View style={styles.container}>
          <Avatar
            userName={user.userName}
            pictureUrl={`${DOMAIN_PATH}${user.pictureUrl}`}
          />
          <Image
            onLoad={() =>
              selectedStory &&
              selectedStory._id === _id &&
              handleSelectedStoryOnLoaded()
            }
            style={styles.image}
            source={{uri: `${DOMAIN_PATH}${url}`}}
          />
        </View>
        <View style={styles.footer}>{footerComponent}</View>
      </>
    );
  }
}
