import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MyContext = createContext();

const AuthContext = ({children}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('loggedInUser'));
      setUser(data);
    };
    getUser();
  }, []);

  return (
    <MyContext.Provider value={{user, setUser}}>{children}</MyContext.Provider>
  );
};

export default AuthContext;
