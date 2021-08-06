import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './AuthNavigator';
import AuthNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
