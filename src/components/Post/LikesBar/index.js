import React from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';
import {DOMAIN_PATH} from '../../../config';

const usersPictures = [
  `${DOMAIN_PATH}/static/profile-photos/2.jpg`,
  `${DOMAIN_PATH}/static/profile-photos/3.jpg`,
  `${DOMAIN_PATH}/static/profile-photos/4.jpg`,
];

const LikesBar = ({likesCount}) => {
  const typeToBeRendered = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  return (
    <View style={styles.likesBarWrapper}>
      {typeToBeRendered ? (
        <>
          <View style={styles.likesMiniImagesWrapper}>
            {usersPictures.map((picture, index) => (
              <Image
                key={picture.toString()}
                style={styles.miniImage(usersPictures.length - index)}
                source={{uri: picture}}
              />
            ))}
          </View>
          <Text>Les gusta a </Text>
          <Text style={styles.boldText}>obsoletememories</Text>
          <Text> y </Text>
          <Text style={styles.boldText}>{likesCount} más</Text>
        </>
      ) : (
        <Text style={styles.boldText}>{likesCount} Me gusta</Text>
      )}
    </View>
  );
};

export default LikesBar;
