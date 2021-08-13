import React from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import styles from './styles';

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
