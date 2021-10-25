import React from 'react';
import {RegisterScreen} from 'src/screens/register/RegisterScreen';
import {INavigationComponentProps} from 'src/types/RootStackNavigations';

export const Register: React.FC<INavigationComponentProps<'Register'>> = ({
  navigation,
  route,
}) => {
  return <RegisterScreen route={route} navigation={navigation} />;
};
