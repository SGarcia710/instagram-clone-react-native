import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  likesBarWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  likesMiniImagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
    paddingLeft: 8,
  },
  miniImage: (zIndex) => ({
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 2.5,
    borderColor: '#F2F2F2',
    marginLeft: -8,
    zIndex,
  }),
  boldText: {
    fontWeight: 'bold',
  },
});

export default styles;
