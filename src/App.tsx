import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import Navigator from './Navigator';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
    </>
  );
};

export default App;
