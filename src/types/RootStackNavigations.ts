import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

export type IRootStackScreenParams = {
  Login: undefined; // undefined because you aren't passing any params to the home screen
  Register: undefined; // {name: string};
};

export interface INavigationComponentProps<
  T extends keyof IRootStackScreenParams,
> {
  navigation?: StackNavigationProp<IRootStackScreenParams, T>;
  route?: RouteProp<IRootStackScreenParams, T>;
}
// Note: since it is the root screen no props can be added to it
