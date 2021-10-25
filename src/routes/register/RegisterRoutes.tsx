import React from 'react';
import {RegisterScreen} from 'src/screens/register/RegisterScreen';
import {IRegisterComponentProps} from 'src/types/register/RegisterStackNavigation';

export const Register: React.FC<IRegisterComponentProps> = ({navigation}) => {
  return <RegisterScreen navigation={navigation} />;
};
