import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {MyContext} from '../Context/Context';
import {useContext} from 'react';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = ({navigation}) => {
  // const {user, setUser} = useContext(MyContext);
  // console.log(user);
  const handleLogin = async (values, {resetForm}) => {
    try {
      const storedUser = JSON.parse(await AsyncStorage.getItem('userData'));

      if (storedUser.email !== values.email) {
        Alert.alert('User does not exist. Please Sign Up');
      } else if (storedUser.password !== values.password) {
        Alert.alert('Incorrect password');
      } else {
        console.log('Login successful:', storedUser);
        Alert.alert('Login successful', 'You are now logged in!');
        // await AsyncStorage.setItem('currentUser', "true");
        // setUser(storedUser);
        navigation.navigate('Home');
        resetForm();
      }
    } catch (error) {
      console.error('Login error:', error.message);
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <ScrollView style={styles.body}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleLogin}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <View style={styles.container}>
            <Text style={styles.heading}>PLEASE LOG IN</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter your email address"
              style={styles.input}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Enter your password"
              secureTextEntry
              style={styles.input}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                }}>
                Not a member? Sign up!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 17,
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#3d4785',
  },
  container: {
    backgroundColor: '#f1f7fe',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 80,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3d4785',
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#3d4785',
    padding: 13,
    marginTop: 20,
    borderRadius: 15,
  },
  errorText: {
    color: 'red',
  },
});

export default LoginForm;
