import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';

import styles from './styles';

import {
  HomeHeader,
  StoriesSlider,
  Post,
  StoriesViewer,
  PostsListFooterLoader,
} from '../../components';
import SplashScreen from '../Splash/SplashScreen';

function HomeScreen(props) {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [postsPage, setPostsPage] = useState(1);
  const [storiesPage, setStoriesPage] = useState(1);

  const handleStoryItemPress = (item) => {
    setSelectedStory(item);
    setIsStoryOpen(true);
  };

  const renderPost = ({item}) => {
    return <Post key={item.toString()} data={item} />;
  };

  const fetchPostsData = async () => {
    const postsRes = await axios.get(`posts?limit=10&page=${postsPage}`);
    setPosts(posts.concat(postsRes.data.results.data));
  };
  const fetchStoriesData = async () => {
    const storiesRes = await axios.get(`stories?limit=10&page=${storiesPage}`);
    setStories(stories.concat(storiesRes.data.results.data));
  };

  const fetchData = async () => {
    try {
      await fetchPostsData();
      await fetchStoriesData();
      // here also can be handled when the process failed at backend and returns a status 'fail' , but at this point i am kinda out of time 😅
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMorePosts = () => setPostsPage(postsPage + 1);
  useEffect(() => {
    fetchPostsData();
  }, [postsPage]);

  const handleLoadMoreStories = () => setStoriesPage(storiesPage + 1);
  useEffect(() => {
    fetchStoriesData();
  }, [storiesPage]);

  return isLoading ? (
    // There is a side effect that can be controlled handling the fetch at the navigator (Moving the splash screen there). I didnt do it that way because I wasnt thinking about implementing redux at that point of the project, because I wasnt going to implement auth 👽
    <SplashScreen />
  ) : (
    <View style={styles.homeScreenWrapper}>
      <HomeHeader />
      <FlatList
        onEndReached={handleLoadMorePosts}
        onEndReachedThreshold={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <StoriesSlider
            handleLoadMoreStories={handleLoadMoreStories}
            handleStoryItemPress={handleStoryItemPress}
            stories={stories}
          />
        }
        data={posts}
        renderItem={renderPost}
        ListFooterComponent={<PostsListFooterLoader />}
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
