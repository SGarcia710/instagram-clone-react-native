import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footerWrapper: {
    // marginTop: -50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 15,
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
  },
});

export default styles;
