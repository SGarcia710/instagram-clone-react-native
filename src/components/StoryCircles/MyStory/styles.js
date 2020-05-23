import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  myStoryWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  circleWrapper: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  photo: {
    width: '93%',
    height: '93%',
    borderRadius: (70 * 0.93) / 2,
  },
  circleIcon: {
    width: 21,
    height: 21,
    backgroundColor: '#45A1F3',
    borderRadius: 21 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    top: '70%',
    left: '72%',
  },
  text: {
    color: 'gray',
    fontSize: 12,
  },
});

export default styles;
