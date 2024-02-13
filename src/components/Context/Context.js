import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MyContext = createContext();

const AuthContext = ({children}) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const data = AsyncStorage.getItem('userData');
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <MyContext.Provider value={{user, setUser}}>{children}</MyContext.Provider>
  );
};

export default AuthContext;
