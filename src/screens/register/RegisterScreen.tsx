import React from 'react';
import {IRegisterComponentProps} from 'src/types/register/RegisterStackNavigation';
import {Button, Text} from 'react-native';
import {CenterComponent} from 'src/components/CenterComponent';

export const RegisterScreen: React.FC<IRegisterComponentProps> = ({
  navigation,
}) => {
  function navigateToLogin() {
    console.log('triggered');
    navigation.navigate('Login');
  }
  return (
    <CenterComponent>
      <Text>I am vjk register screen</Text>
      <Button title="go to login" onPress={() => navigateToLogin()} />
    </CenterComponent>
  );
};
