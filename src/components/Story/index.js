import React, {Component} from 'react';

import {Image, View, SafeAreaView, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export class Story extends Component {
  render() {
    const {
      story: {url},
    } = this.props;
    console.log(url);

    return (
      <SafeAreaView style={styles.storyWrapper}>
        <View style={styles.storyWrapper}>
          <Image style={styles.image} source={{uri: url}} />
        </View>

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
      </SafeAreaView>
    );
  }
}
