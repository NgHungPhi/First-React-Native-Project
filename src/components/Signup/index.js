import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonCustom from '../common/ButtonCustom';
import Container from '../common/Container';
import Input from '../common/Input';
import {images} from '../../assets/theme/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGGIN} from '../../contants/routeName';
const SignupComponent = () => {
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

          // error="This field is required"
        />
        <Input
          label="First Name"
          placeholder="Enter First Name"
          iconPosition="right"

          // error="This field is required"
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          iconPosition="right"

          // error="This field is required"
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          iconPosition="right"

          // error="This field is required"
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
        />
        <ButtonCustom title="Submit" loading={true} disabled={true} />
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
