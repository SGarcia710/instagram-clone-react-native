import React, {useState} from 'react';

import {View, Text} from 'react-native';

import styles from './styles';

const DESCRIPTION_CHAR_LIMIT = 80;
const generateDescription = (description) => {
  let newDescription = description.slice(0, DESCRIPTION_CHAR_LIMIT);

  if (description.length > DESCRIPTION_CHAR_LIMIT)
    return newDescription.trim().concat('...');

  return newDescription;
};

const Description = ({userName, description}) => {
  const [showDescription, setShowDescription] = useState(false);

  const [componentDescription, setComponentDescription] = useState(
    generateDescription(description),
  );

  const onShowCommentButtonHandler = () => {
    setShowDescription(true);
    setComponentDescription(description);
  };

  return (
    <View style={styles.descriptionWrapper}>
      <Text>
        <Text style={styles.boldText}>{userName}</Text>{' '}
        <Text style={styles.descriptionText}>{componentDescription}</Text>
        {!showDescription && description.length > DESCRIPTION_CHAR_LIMIT ? (
          <Text style={styles.buttonText} onPress={onShowCommentButtonHandler}>
            {' '}
            más
          </Text>
        ) : null}
      </Text>
    </View>
  );
};

export default Description;
