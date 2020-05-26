import React from 'react';
import Modal from 'react-native-modalbox';

import {Stories, Footer} from './components';

import styles from './styles';

const StoriesViewer = ({
  setIsStoryOpen,
  isStoryOpen,
  selectedStory,
  orderedStories,
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
      {/* There is an undesired effect when using ios and its that the stories viewer never starts from the given index, it returns to the 0 index.  Looking for some fix 🚨 */}
      <Stories
        footerComponent={<Footer />}
        selectedStory={selectedStory}
        stories={orderedStories}
      />
    </Modal>
  );
};
export default React.memo(StoriesViewer);
