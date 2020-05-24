import React from 'react';

import {View, Text} from 'react-native';

import styles from './styles';

const Time = () => {
  return (
    <View style={styles.timeWrapper}>
      <Text>
        <Text style={styles.timeText}>Hace 26 minutos ·</Text>
        <Text style={styles.translateText}> Ver traducción</Text>
      </Text>
    </View>
  );
};

export default Time;
