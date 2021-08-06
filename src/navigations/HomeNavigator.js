import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTING,
} from '../contants/routeName';
import Contact from '../screens/Contact';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Setting from '../screens/Setting';
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={CONTACT_LIST} component={Contact} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTING} component={Setting} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
