import React from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';

const usersPictures = [
  'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(1).jpg?alt=media&token=3697f1f2-9257-49ea-9fad-d2804a5132f5',
  'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(1).png?alt=media&token=e9637663-9ebe-4215-bc2a-1a9baa725c8c',
  'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(10).jpg?alt=media&token=b40b4f77-2d2d-4608-bd98-b30737da0a27',
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
