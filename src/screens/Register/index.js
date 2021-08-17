import React, {useEffect, useState} from 'react';
import SignupComponent from '../../components/Signup';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance
      .post('')
      .then()
      .catch(error => {
        console.log('Err Register', error);
      });
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field need min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = ({name, value}) => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a user name'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add an email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };
  return (
    <SignupComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
