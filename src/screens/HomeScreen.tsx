import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    color: colors.primaryDark,
  },
});

export default HomeScreen;
