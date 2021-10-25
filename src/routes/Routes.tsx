import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {IRootStackScreenParams} from 'src/types/RootStackNavigations';
import {Login} from 'src/routes/login/LoginRoutes';
import {Register} from 'src/routes/register/RegisterRoutes';
// import {ROUTES} from 'src/constants/RouterConstants';
interface RoutesProps {}

const Stack = createStackNavigator<IRootStackScreenParams>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // press cntrl + space to check the params
          headerShown: true,
        }}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            // press cntrl + space to check the params
            headerTitle: 'get me in',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: 'add me in',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
