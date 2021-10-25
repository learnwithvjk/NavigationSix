import React from 'react';
import {ILoginComponentProps} from 'src/types/login/LoginStackNavigations';
import {Text, Button} from 'react-native';
import {CenterComponent} from 'src/components/CenterComponent';
// import {Button} from 'src/components/Button';

export const LoginScreen: React.FC<ILoginComponentProps> = ({navigation}) => {
  function navigateToRegister() {
    console.log('triggered');
    navigation.navigate('Register');
  }
  return (
    <CenterComponent>
      <Text>I am login screen</Text>
      <Button
        onPress={() => {
          console.log('hi');
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button title="go to register" onPress={navigateToRegister} />
    </CenterComponent>
  );
};
