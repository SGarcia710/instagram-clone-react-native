import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {v4 as uuidv4} from 'uuid';

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
      userName: 'obsoletememories',
      userPicture: usersProfilePicture[0],
      location: 'Cali, Colombia',
      profilePicture: usersProfilePicture[0],
      media: [
        {
          type: 'image',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(10).jpg?alt=media&token=745785ed-2087-4802-a981-14b54a0b2c1f',
        },
        {
          type: 'image',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(14).jpg?alt=media&token=b8b46a17-bb6f-4dbf-a75f-03d760c43dea',
        },
      ],
    },
    {
      userName: 'jonatanvergara',
      userPicture: usersProfilePicture[1],
      location: 'Madrid, España',
      profilePicture: usersProfilePicture[1],
      media: [
        {
          type: 'image',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(17).jpg?alt=media&token=d32a52ff-02f5-456e-8ae8-8f5d7f129b13',
        },
        {
          type: 'image',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(28).jpg?alt=media&token=0bf64dce-464a-4b29-b17a-d634c245b9dc',
        },
        {
          type: 'video',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fvideos%2FBeach.mp4?alt=media&token=3259aa3f-43a2-43d3-a552-795c7436e2be',
        },
      ],
    },
    {
      userName: 'pradalu',
      userPicture: usersProfilePicture[2],
      location: 'Berlín, Alemanía',
      profilePicture: usersProfilePicture[2],
      media: [
        {
          type: 'video',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fvideos%2FPark.mp4?alt=media&token=17f266ad-19e8-45e8-891b-21006924dc38',
        },
      ],
    },
    {
      userName: 'pachecoochoa',
      likes: 12,
      description: 'esta es una descripcion',
      date: 'UTC',
      numberComments: 3,
      userPicture: usersProfilePicture[3],
      location: 'Tokio, Japón',
      media: [
        {
          type: 'image',
          url:
            'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/posts%2Fimages%2FPost%20(30).jpg?alt=media&token=28773e6b-bdd5-4b22-92d8-98255f33ac57',
        },
      ],
    },
  ];

  const renderPost = ({item}) => {
    return <Post key={() => uuidv4()} data={item} />;
  };

  return (
    <View style={styles.homeScreenWrapper}>
      <Header />
      {/* <StoriesSlider stories={usersProfilePicture} /> */}
      <FlatList
        ListHeaderComponent={() => (
          <StoriesSlider stories={usersProfilePicture} />
        )}
        data={posts}
        renderItem={renderPost}
      />
      {/* {posts.map((post) => {
        return <Post key={() => uuidv4()} data={post} />;
      })} */}
    </View>
  );
}

export default HomeScreen;
