import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CREATE SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    color: colors.red,
  },
});

export default CreateScreen;
