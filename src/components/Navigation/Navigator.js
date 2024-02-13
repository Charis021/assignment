import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupForm from '../screens/Formik';
import Home from '../screens/Home';
import LoginForm from '../screens/Login';
import {useContext, useState, useEffect} from 'react';
import {MyContext} from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  // const {user} = useContext(MyContext);
  const [data, setData] = useState(false);
  const getUser = () => {
    const data = AsyncStorage.getItem('userData');
    if (data) {
      setData(true);
    } else {
      setData(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(data);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        {data ? (
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
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
