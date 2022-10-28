import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Button from '../components/Button';
import CreateScreen from '../screens/CreateScreen';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../theme/colors';
import {HomeScreenNavProp, RootStackParamList} from '../types/Nav';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        contentStyle: styles.screenStyle,
      }}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}: HomeScreenNavProp) => ({
          title: 'Todos',
          headerRight: () => (
            <Button
              title="ADD"
              onPress={() => navigation.navigate('CreateScreen')}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          ),
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <RootStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{title: 'Create Todo'}}
      />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: colors.white},
  headerTitleStyle: {
    color: colors.dark,
  },
  screenStyle: {backgroundColor: colors.white},
  button: {backgroundColor: colors.white},
  buttonText: {color: colors.dark},
});
