import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonCustom from '../../components/common/ButtonCustom';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="UserName"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
        // error="This field is required"
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        keyboardType="numeric"
      />
      <ButtonCustom title="Submit" loading={true} disabled={true} />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
