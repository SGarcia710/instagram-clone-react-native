import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export class Footer extends PureComponent {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.answerWrapper}>
          <View style={styles.answerIconWrapper}>
            <FontAwesome name="camera" size={16} color="white" />
          </View>

          <Text style={styles.answerPlaceholder}>Enviar mensaje</Text>
        </View>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={20}
          color="white"
        />
      </View>
    );
  }
}
