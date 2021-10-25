import React from 'react';
import {LoginScreen} from 'src/screens/login/LoginScreen';
import {ILoginComponentProps} from 'src/types/login/LoginStackNavigations';

export const Login: React.FC<ILoginComponentProps> = ({navigation}) => {
  return <LoginScreen navigation={navigation} />;
};
