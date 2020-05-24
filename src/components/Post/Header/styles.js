import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    // height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  userWrapper: {flexDirection: 'row'},
  infoWrapper: {},
  title: {
    fontWeight: '700',
  },
  location: {
    fontSize: 12,
  },
});

export default styles;
