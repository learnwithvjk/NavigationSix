import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react'; // TODO: Need to create snippets for React native
import {IUser, User} from 'src/types/user/User';
import {createUser} from 'src/factory/user/UserFactory';

interface AuthProviderProps {}

export const AuthContext = React.createContext<IUser>(createUser());

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  function logIn() {
    const fakeUser = {userName: 'vjk'};
    setUser(fakeUser);
    AsyncStorage.setItem('user', JSON.stringify(fakeUser));
  }
  function logOut() {
    AsyncStorage.removeItem('user');
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
