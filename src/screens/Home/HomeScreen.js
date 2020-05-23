import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import {Header, StoriesSlider, Post} from '../../components';

function HomeScreen() {
  const usersProfilePicture = [
    'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(1).jpg?alt=media&token=3697f1f2-9257-49ea-9fad-d2804a5132f5',
    'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(1).png?alt=media&token=e9637663-9ebe-4215-bc2a-1a9baa725c8c',
    'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(10).jpg?alt=media&token=b40b4f77-2d2d-4608-bd98-b30737da0a27',
    'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(11).jpg?alt=media&token=59e60bb0-0d63-4947-996b-d37c96ed732d',
  ];

  const posts = [
    {
      userName: 'userName',
      userPicture: usersProfilePicture[0],
      location: 'Cali, Colombia',
      profilePicture: usersProfilePicture[0],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(10).jpg?alt=media&token=745785ed-2087-4802-a981-14b54a0b2c1f',
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(14).jpg?alt=media&token=b8b46a17-bb6f-4dbf-a75f-03d760c43dea',
      ],
      videos: [],
    },
    {
      userName: 'userName 2',
      userPicture: usersProfilePicture[1],
      location: 'Madrid, España',
      profilePicture: usersProfilePicture[1],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(17).jpg?alt=media&token=d32a52ff-02f5-456e-8ae8-8f5d7f129b13',
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(28).jpg?alt=media&token=0bf64dce-464a-4b29-b17a-d634c245b9dc',
      ],
      videos: [
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fvideos%2FBeach.mp4?alt=media&token=3259aa3f-43a2-43d3-a552-795c7436e2be',
      ],
    },
    {
      userName: 'userName 3',
      userPicture: usersProfilePicture[2],
      location: 'Berlín, Alemanía',
      profilePicture: usersProfilePicture[2],
      images: [],
      videos: [
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fvideos%2FPark.mp4?alt=media&token=17f266ad-19e8-45e8-891b-21006924dc38',
      ],
    },
    {
      userName: 'userName 4',
      userPicture: usersProfilePicture[3],
      location: 'Tokio, Japón',
      profilePicture: usersProfilePicture[3],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(30).jpg?alt=media&token=28773e6b-bdd5-4b22-92d8-98255f33ac57',
      ],
      videos: [],
    },
  ];

  return (
    <View style={styles.homeScreenWrapper}>
      <Header />
      <StoriesSlider stories={usersProfilePicture} />
      <Post data={posts[0]} />
    </View>
  );
}

export default HomeScreen;
