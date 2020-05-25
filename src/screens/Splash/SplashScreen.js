import React from 'react';

import {View, Text, Platform, MaskedViewIOS} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import InstagramIcon from '../../assets/icons/InstagramIcon.svg';

function SplashScreen() {
  return (
    <View style={styles.splashScreenWrapper}>
      <InstagramIcon />
      <View style={styles.footer}>
        <Text style={styles.fromText}>from</Text>
        {Platform.OS === 'ios' ? (
          <MaskedViewIOS
            maskElement={<Text style={styles.facebookName}>FACEBOOK</Text>}>
            <LinearGradient
              colors={['#f00', '#0f0']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={[styles.facebookName, {opacity: 0}]}>FACEBOOK</Text>
            </LinearGradient>
          </MaskedViewIOS>
        ) : (
          <Text style={styles.facebookName}>FACEBOOK</Text>
        )}
      </View>
    </View>
  );
}

export default SplashScreen;
