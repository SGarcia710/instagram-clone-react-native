import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles';

import {HomeHeader, StoriesSlider, Post, StoriesViewer} from '../../components';

import {DOMAIN_PATH} from '../../config';
const usersProfilePicture = [
  `${DOMAIN_PATH}/static/profile-photos/1.jpg`,
  `${DOMAIN_PATH}/static/profile-photos/2.jpg`,
  `${DOMAIN_PATH}/static/profile-photos/3.jpg`,
  `${DOMAIN_PATH}/static/profile-photos/4.jpg`,
];

const posts = [
  {
    userName: 'obsoletememories',
    likes: 552,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    numberComments: 66,
    userPicture: usersProfilePicture[0],
    location: 'Cali, Colombia',
    profilePicture: usersProfilePicture[0],
    media: [
      {
        type: 'image',
        url: `${DOMAIN_PATH}/static/posts/1.jpg`,
      },
      {
        type: 'image',
        url: `${DOMAIN_PATH}/static/posts/2.jpg`,
      },
    ],
  },
  {
    userName: 'jonatanvergara',
    likes: 122,
    description: 'esta es una descripcion',
    numberComments: 1,
    userPicture: usersProfilePicture[1],
    location: 'Madrid, España',
    profilePicture: usersProfilePicture[1],
    media: [
      {
        type: 'image',
        url: `${DOMAIN_PATH}/static/posts/3.jpg`,
      },
      {
        type: 'image',
        url: `${DOMAIN_PATH}/static/posts/4.jpg`,
      },
      {
        type: 'video',
        url: `${DOMAIN_PATH}/static/videos/Airport.mp4`,
      },
    ],
  },
  {
    userName: 'pradalu',
    likes: 321,
    description: 'esta es una descripcion 😀😀',
    numberComments: 12,
    userPicture: usersProfilePicture[2],
    location: 'Berlín, Alemanía',
    profilePicture: usersProfilePicture[2],
    media: [
      {
        type: 'video',
        url: `${DOMAIN_PATH}/static/videos/Beach.mp4`,
      },
    ],
  },
  {
    userName: 'pachecoochoa',
    likes: 1102,
    description: '🙈',
    numberComments: 5,
    userPicture: usersProfilePicture[3],
    location: 'Tokio, Japón',
    media: [
      {
        type: 'image',
        url: `${DOMAIN_PATH}/static/posts/5.jpg`,
      },
    ],
  },
];

const stories = [
  {
    _id: 'aksjdlaksjd1',
    url: `${DOMAIN_PATH}/static/stories/1.jpg`,
    user: {
      id: 'askldjalskdj',
      pictureUrl: `${DOMAIN_PATH}/static/profile-photos/2.jpg`,
      userName: 'obsoletememories',
    },
  },
  {
    _id: 'aksjdlaksjd2',
    url: `${DOMAIN_PATH}/static/stories/2.jpg`,
    user: {
      id: 'askldjalskdj',
      pictureUrl: `${DOMAIN_PATH}/static/profile-photos/3.jpg`,
      userName: 'obsoletememories',
    },
  },
  {
    _id: 'aksjdlaksjd3',
    url: `${DOMAIN_PATH}/static/stories/3.jpg`,
    user: {
      id: 'askldjalskdj',
      pictureUrl: `${DOMAIN_PATH}/static/profile-photos/4.jpg`,
      userName: 'obsoletememories',
    },
  },
  {
    _id: 'aksjdlaksjd4',
    url: `${DOMAIN_PATH}/static/stories/4.jpg`,
    user: {
      id: 'askldjalskdj',
      pictureUrl: `${DOMAIN_PATH}/static/profile-photos/5.jpg`,
      userName: 'obsoletememories',
    },
  },
];

function HomeScreen(props) {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [orderedStories, setOrderedStories] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  const handleStoryItemPress = (item, index) => {
    setSelectedStory(item);

    const _stories = Array.from(stories);

    const rest = _stories.splice(index);
    const first = _stories;

    const newOrderedStories = rest.concat(first);

    setOrderedStories(newOrderedStories);
    setIsStoryOpen(true);
  };

  const renderPost = ({item}) => {
    return <Post key={item.toString()} data={item} />;
  };

  return (
    <View style={styles.homeScreenWrapper}>
      <HomeHeader />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <StoriesSlider
            handleStoryItemPress={handleStoryItemPress}
            stories={stories}
          />
        }
        data={posts}
        renderItem={renderPost}
      />
      <StoriesViewer
        setIsStoryOpen={setIsStoryOpen}
        isStoryOpen={isStoryOpen}
        selectedStory={selectedStory}
        orderedStories={orderedStories}
      />
    </View>
  );
}

export default HomeScreen;
