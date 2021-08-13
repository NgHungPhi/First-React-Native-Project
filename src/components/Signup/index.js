import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonCustom from '../common/ButtonCustom';
import Container from '../common/Container';
import Input from '../common/Input';
import {images} from '../../assets/theme/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGGIN} from '../../contants/routeName';
const SignupComponent = ({onChange, onSubmit, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container style={styles.container}>
      <Image
        height={70}
        width={70}
        source={images.logo}
        style={styles.logoImage}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to My Project</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <Input
          label="UserName"
          placeholder="Enter Username"
          iconPosition="right"
          autoFocus={true}
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          error={errors.userName}
        />
        <Input
          label="First Name"
          placeholder="Enter First Name"
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
          error={errors.lastName}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          error={errors.email}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          error={errors.password}
        />
        <ButtonCustom
          onPress={onSubmit}
          title="Submit"
          loading={false}
          disabled={false}
          primary={true}
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default memo(SignupComponent);
