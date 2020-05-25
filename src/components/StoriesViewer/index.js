import React from 'react';
import Modal from 'react-native-modalbox';

import {Stories, Footer} from './components';

import styles from './styles';

export const StoriesViewer = ({
  setIsStoryOpen,
  isStoryOpen,
  selectedStory,
  orderedStories,
  navigation,
}) => {
  return (
    <Modal
      style={styles.modal}
      isOpen={isStoryOpen}
      onClosed={() => setIsStoryOpen(false)}
      position="center"
      swipeToClose
      swipeArea={250}
      coverScreen={true}
      backButtonClose>
      <Stories
        footerComponent={<Footer />}
        selectedStory={selectedStory}
        stories={orderedStories}
      />
    </Modal>
  );
};
