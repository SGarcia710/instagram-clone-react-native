import React, {PureComponent} from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import styles from './styles';

export const Avatar = ({userName, pictureUrl}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={{uri: pictureUrl}} style={styles.avatar} />
        <Text style={styles.username}>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};
