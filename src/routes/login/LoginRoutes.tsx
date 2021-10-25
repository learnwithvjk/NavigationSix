import React from 'react';
import {LoginScreen} from 'src/screens/login/LoginScreen';
import {INavigationComponentProps} from 'src/types/RootStackNavigations';

export const Login: React.FC<INavigationComponentProps<'Login'>> = ({
  navigation,
}) => {
  return <LoginScreen navigation={navigation} />;
};
