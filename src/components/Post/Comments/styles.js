import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  commentsWrapper: {
    width: '100%',
    paddingHorizontal: 10,
  },
  answerWrapper: {
    marginVertical: 5,
    borderLeftWidth: 2,
    borderLeftColor: 'lightgray',
    paddingLeft: 5,
    marginLeft: 10,
    // height: 18,
    justifyContent: 'center',
    marginTop: -1,
  },
  commentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'gray',
    marginVertical: 3.5,
  },
  addCommentWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCommentImage: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 8,
  },
  addCommentButton: {
    color: 'gray',
    fontSize: 15,
  },
  addCommentHorizontalWrapper: {
    flexDirection: 'row',
  },
  addCommentIconsWrapper: {
    flexDirection: 'row',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
