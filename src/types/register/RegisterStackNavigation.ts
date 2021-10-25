import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackScreenParams} from 'src/types/RootStackNavigations';

export type IRegisterStackNavigationParams = {};

export type IRegisterStackNavigationProps = StackNavigationProp<
  IRootStackScreenParams,
  'Register'
>;

export interface IRegisterComponentProps {
  navigation: IRegisterStackNavigationProps;
}
