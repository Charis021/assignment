import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupForm from '../screens/Formik';
import Home from '../screens/Home';
import LoginForm from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState, useContext} from 'react';
import {MyContext} from '../Context/Context';
import FlatHome from '../../src/Screens/FlatHome';
import Horizontal from '../../src/Screens/Horizontal';
import Vertical from '../../src/Screens/Vertical';
import CartScreen from '../../src/Screens/CartScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [userData, setUserData] = useState(null);
  const {user} = useContext(MyContext);

  const getData = async () => {
    const data = JSON.parse(await AsyncStorage.getItem('loggedInUser'));
    setUserData(data);
  };

  useEffect(() => {
    getData();
    console.log(user);
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}
              component={Home}
            />
            <Stack.Screen
              name="FlatHome"
              options={{headerShown: false}}
              component={FlatHome}
            />
            <Stack.Screen
              name="Horizontal"
              options={{headerShown: false}}
              component={Horizontal}
            />
            <Stack.Screen
              name="Vertical"
              options={{headerShown: false}}
              component={Vertical}
            />
            <Stack.Screen
              name="CartScreen"
              options={{headerShown: false}}
              component={CartScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="LogIn"
              component={LoginForm}
            />
            <Stack.Screen
              name="SignUp"
              options={{headerShown: false}}
              component={SignupForm}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
