import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: 'gray',
    marginTop: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default styles;
