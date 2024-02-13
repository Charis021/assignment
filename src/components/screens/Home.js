import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../common/Header';
import {MyContext} from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const {setUser} = useContext(MyContext);
  const [userData, setUserData] = useState();

  const handleLogOut = async () => {
    await AsyncStorage.setItem('userData', 'false');
    window.location.href = 'LogIn';
  };

  const getData = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('userData'));
    setUserData(user);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(userData);
  return (
    <View style={styles.body}>
      <Header title={'Home'} showBackButton={false} />
      <View style={styles.container}>
        {userData?.profilePic && (
          <Image
            source={{uri: userData.profilePic}}
            style={styles.profilePic}
          />
        )}
        <Text style={styles.input}>User Details:</Text>
        <Text style={styles.input}>First Name: {userData?.firstName}</Text>
        <Text style={styles.input}>Last Name: {userData?.lastName}</Text>
        <Text style={styles.input}>Email: {userData?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogOut}>
          <Text style={{color: '#ffffff', fontSize: 17}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3d4785',
  },
  container: {
    backgroundColor: '#f1f7fe',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    margin: 5,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#3d4785',
    padding: 13,
    marginTop: 20,
    borderRadius: 15,
  },
});
