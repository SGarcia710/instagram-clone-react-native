import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  regularStoryWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  linearGradient: (size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  circleWrapper: {
    width: '93%',
    height: '93%',
    borderRadius: (70 * 0.93) / 2,
    position: 'relative',
    borderColor: 'white',
    borderWidth: 2.5,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: (70 * 0.93) / 2,
  },
  textWrapper: {
    width: 45,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 2.5,
    position: 'absolute',
    top: '78%',
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
  userName: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
