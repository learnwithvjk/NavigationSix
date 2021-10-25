import React from 'react';
import {INavigationComponentProps} from 'src/types/register/RegisterStackNavigation';
import {Button, Text} from 'react-native';
import {CenterComponent} from 'src/components/CenterComponent';

export const RegisterScreen: React.FC<INavigationComponentProps> = ({
  navigation,
  route,
}) => {
  function navigateToLogin() {
    console.log('triggered');
    navigation.navigate('Login');
  }
  return (
    <CenterComponent>
      <Text>I am vjk register screen</Text>
      <Text> {route.name} </Text>
      <Button title="go to login" onPress={() => navigateToLogin()} />
    </CenterComponent>
  );
};
