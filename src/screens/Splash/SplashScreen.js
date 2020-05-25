import React from 'react';

import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import styles from './styles';
import InstagramIcon from '../../assets/icons/InstagramIcon.svg';

function SplashScreen() {
  return (
    <View style={styles.splashScreenWrapper}>
      <InstagramIcon />
      <View style={styles.footer}>
        <Text style={styles.fromText}>from</Text>
        <MaskedView
          maskElement={<Text style={styles.facebookName}>FACEBOOK</Text>}>
          <LinearGradient
            colors={['#f00', '#0f0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={[styles.facebookName, {opacity: 0}]}>FACEBOOK</Text>
          </LinearGradient>
        </MaskedView>
      </View>
    </View>
  );
}

export default SplashScreen;
