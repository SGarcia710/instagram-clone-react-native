import React from 'react';

import {View, Text, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import styles from './styles';
import InstagramIcon from '../../assets/icons/InstagramIcon.svg';

function SplashScreen() {
  return (
    <Modal statusBarTranslucent={true}>
      <View style={styles.splashScreenWrapper}>
        <InstagramIcon />
        <View style={styles.footer}>
          <Text style={styles.fromText}>from</Text>
          <MaskedView
            maskElement={<Text style={styles.facebookName}>FACEBOOK</Text>}>
            <LinearGradient
              colors={['#F78800', '#DE000E', '#DE000E', '#B30086']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}>
              <Text style={[styles.facebookName, {opacity: 0}]}>FACEBOOK</Text>
            </LinearGradient>
          </MaskedView>
        </View>
      </View>
    </Modal>
  );
}

export default SplashScreen;
