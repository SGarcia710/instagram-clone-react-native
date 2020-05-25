import React, {PureComponent} from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';

import styles from './styles';

import {Avatar} from '../';

import {DOMAIN_PATH} from '../../../../config';

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
          {/* <Avatar
            userName="Holamund"
            pictureUrl={`${DOMAIN_PATH}/static/profile-photos/2.jpg`}
          /> */}

          {/* <View style={styles.avatarWrapper}>
            <Image
              source={{uri: `${DOMAIN_PATH}/static/profile-photos/2.jpg`}}
              style={styles.avatar}
            />
            <Text style={styles.username}>{user.userName}</Text>
          </View> */}
          <Avatar userName={user.userName} pictureUrl={user.pictureUrl} />
          <Image
            onLoad={() =>
              selectedStory &&
              selectedStory._id === _id &&
              handleSelectedStoryOnLoaded()
            }
            style={styles.image}
            source={{uri: url}}
          />
        </View>
        <View style={styles.footer}>{footerComponent}</View>
      </>
    );
  }
}
