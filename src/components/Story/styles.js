import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  storyWrapper: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 5,
  },
  footer: {
    marginTop: -50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 15,
    // paddingVertical: 10,
    alignItems: 'center',
    paddingBottom: 5,
  },
  answerWrapper: {
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: 'gray',
    flexDirection: 'row',
    width: '91%',
    alignItems: 'center',
    padding: 3,
    opacity: 0.8,
  },
  answerIconWrapper: {
    width: 28,
    height: 28,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28 / 2,
    marginRight: 10,
    opacity: 0.8,
  },
  answerPlaceholder: {
    color: 'white',
    // opacity: 1,
  },
});

export default styles;
