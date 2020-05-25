import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';

import styles from './styles';

import {HomeHeader, StoriesSlider, Post, StoriesViewer} from '../../components';
import SplashScreen from '../Splash/SplashScreen';

function HomeScreen(props) {
  const [stories, setStories] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleStoryItemPress = (item) => {
    setSelectedStory(item);
    setIsStoryOpen(true);
  };

  const renderPost = ({item}) => {
    return <Post key={item.toString()} data={item} />;
  };

  const fetchData = async () => {
    try {
      const postsRes = await axios.get(`posts?limit=10&page=1`);
      const storiesRes = await axios.get(`stories?limit=10&page=1`);

      setPosts(postsRes.data.results.data);
      setStories(storiesRes.data.results.data);

      // here also can be handled when the process failed and returns a status 'fail' from the backend, but at this point i am kinda out of time 😅
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => console.warn('handleLoadMorePosts');

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    // There is a side effect that can be controlled handling the fetch at the navigator. I didnt do it that way because I wasnt thinking about implementing redux at that point of the project, because I havent implemented auth 👽
    <SplashScreen />
  ) : (
    <View style={styles.homeScreenWrapper}>
      <HomeHeader />
      <FlatList
        onEndReached={handleLoadMore}
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
        orderedStories={stories}
      />
    </View>
  );
}

export default HomeScreen;
