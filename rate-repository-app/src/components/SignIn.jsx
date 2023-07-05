import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});


const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.topView}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              style={styles.input}
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText} fontWeight="bold" >SUBMIT</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: "#fff",
    paddingBottom: 10
  },
  container: {
    marginHorizontal: 10,
  },
  input: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default SignIn;