import { PortalProvider } from '@gorhom/portal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import Navigator from './Navigator';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <PortalProvider>
        <Navigator />
      </PortalProvider>

    </>
  );
};

export default App;
