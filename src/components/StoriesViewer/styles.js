import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
