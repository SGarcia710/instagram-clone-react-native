import React from 'react';

import {View, Text, Image} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';

import {getRandomNumber} from '../../../utils';
import {DOMAIN_PATH} from '../../../config';

const Comment = ({content, user}) => {
  return (
    <View style={styles.commentWrapper}>
      <Text>
        <Text style={styles.boldText}>{user}</Text> {content}
      </Text>
      <SimpleLineIcons name="heart" size={12} color="gray" />
    </View>
  );
};

const CommentWithAnswer = ({comment, answer}) => {
  return (
    <>
      {comment}
      <View style={styles.answerWrapper}>{answer}</View>
    </>
  );
};

const AddComment = () => (
  <View style={styles.addCommentWrapper}>
    <View style={styles.addCommentHorizontalWrapper}>
      <Image
        style={styles.addCommentImage}
        source={{
          uri: `${DOMAIN_PATH}/static/profile-photos/1.jpg`,
        }}
      />
      <Text style={styles.addCommentButton}>Agrega un comentario...</Text>
    </View>
    <View style={styles.addCommentIconsWrapper}>
      <Text>💖</Text>
      <Text>😊</Text>
      <SimpleLineIcons name="plus" size={12} color="gray" />
    </View>
  </View>
);

const Comments = ({commentsCount}) => {
  const shouldRenderSection = {
    commentsList: getRandomNumber(0, 1),
    commentWithAnswer: getRandomNumber(0, 1),
    addComment: getRandomNumber(0, 1),
  };
  return (
    <View style={styles.commentsWrapper}>
      {commentsCount === 1 ? (
        <Text style={styles.buttonText}>Ver 1 comentario</Text>
      ) : (
        <>
          <Text style={styles.buttonText}>
            Ver los {commentsCount} comentarios
          </Text>
          {shouldRenderSection.commentsList ? (
            <>
              <Comment user="pradalu" content="buena foto! 📷📷" />
              <Comment user="flor21" content="Me encanta 🤩" />
            </>
          ) : null}
          {shouldRenderSection.commentWithAnswer ? (
            <CommentWithAnswer
              comment={
                <Comment user="obsoletememories" content="excelente 💯" />
              }
              answer={<Comment user="jonatanordonez" content="¿cierto?" />}
            />
          ) : null}
          {shouldRenderSection.addComment ? <AddComment /> : null}
        </>
      )}
    </View>
  );
};

export default Comments;
