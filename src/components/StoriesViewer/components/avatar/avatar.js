import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import styles from './styles';

export const Avatar = ({userName, pictureUrl}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={{uri: pictureUrl}} style={styles.avatar} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.username}>{userName}</Text>
            <Text style={styles.time}>19h</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
