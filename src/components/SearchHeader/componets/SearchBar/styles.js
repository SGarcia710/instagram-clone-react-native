import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 5,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    paddingHorizontal: 7,
    width: '93.5%',
    borderRadius: 5,
  },
  searchInput: {
    padding: 0,
    height: Platform.OS === 'ios' ? 25 : 0,
    marginLeft: 5,
  },
});

export default styles;
