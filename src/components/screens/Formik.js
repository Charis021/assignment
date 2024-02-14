import React, {useContext} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import ValidationSchema from '../common/Validation';
import Header from '../common/Header';
import {MyContext} from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupForm = ({navigation}) => {
  const {setUser} = useContext(MyContext);
  const handleSubmit = async (initialValues, {resetForm}) => {
    await AsyncStorage.setItem('userData', JSON.stringify(initialValues));
    await AsyncStorage.setItem('loggedInUser', JSON.stringify(initialValues));
    setUser(initialValues);
    Alert.alert('Success', 'SignUp successful');

    resetForm();
  };

  const handleChooseProfilePic = setFieldValue => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setFieldValue('profilePic', imageUri);
      }
    });
  };

  return (
    <ScrollView style={styles.body}>
      <Header title={'Log In'} navigation={navigation} showBackButton={true} />
      <Text style={styles.heading}>SIGN UP</Text>
      <Formik
        initialValues={{
          profilePic: null,
          firstName: '',
          lastName: '',
          email: '',
          address: {line1: '', line2: '', city: '', state: '', zip: ''},
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <View style={styles.container}>
            {values.profilePic && (
              <Image source={{uri: values.profilePic}} style={styles.image} />
            )}
            <View style={styles.sections}>
              <View style={{width: '48%'}}>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  placeholder="First name"
                  style={styles.sectionInput}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={styles.errorSectionText}>
                    {errors.firstName}
                  </Text>
                )}
              </View>
              <View style={{width: '48%'}}>
                <TextInput
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  placeholder="Last name"
                  style={styles.sectionInput}
                />
                {touched.lastName && errors.lastName && (
                  <Text style={styles.errorSectionText}>{errors.lastName}</Text>
                )}
              </View>
            </View>

            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email address"
              style={styles.input}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange('address.line1')}
              onBlur={handleBlur('address.line1')}
              value={values.address.line1}
              placeholder="Address Line 1"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('address.line2')}
              onBlur={handleBlur('address.line2')}
              value={values.address.line2}
              placeholder="Address Line 2"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('address.city')}
              onBlur={handleBlur('address.city')}
              value={values.address.city}
              placeholder="City"
              style={styles.input}
            />
            <View style={styles.sections}>
              <View style={{width: '48%'}}>
                <TextInput
                  onChangeText={handleChange('address.state')}
                  onBlur={handleBlur('address.state')}
                  value={values.address.state}
                  placeholder="State"
                  style={styles.sectionInput}
                />
              </View>
              <View style={{width: '48%'}}>
                <TextInput
                  onChangeText={handleChange('address.zip')}
                  onBlur={handleBlur('address.zip')}
                  value={values.address.zip}
                  placeholder="Zip"
                  style={styles.sectionInput}
                />
              </View>
            </View>

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Confirm password"
              secureTextEntry
              style={styles.input}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleChooseProfilePic(setFieldValue)}>
              <Text style={{color: '#ffffff', fontSize: 17}}>
                Choose Profile Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => navigation.navigate('LogIn')}>
              <Text>Already a member? Log In!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{color: '#ffffff', fontSize: 17}}>Submit</Text>
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
  image: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  heading: {
    textAlign: 'center',
    fontSize: 50,
    color: '#f1f7fe',
    fontWeight: '700',
    marginTop: 50,
  },
  container: {
    backgroundColor: '#f1f7fe',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    borderRadius: 20,
  },
  sections: {
    flexDirection: 'row',
    gap: 10,
  },
  sectionInput: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  errorSectionText: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    color: 'red',
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

export default SignupForm;
