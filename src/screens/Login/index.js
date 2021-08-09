import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginComponent from '../../components/Login';
const Login = () => {
  const [value, onChangeText] = useState('');
  return <LoginComponent />;
};

export default Login;

const styles = StyleSheet.create({});
