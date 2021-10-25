import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackScreenParams} from 'src/types/RootStackNavigations';

export type ILoginStackNavigationParams = {};

export type ILoginStackNavigationProps = StackNavigationProp<
  IRootStackScreenParams,
  'Login'
>;

export interface ILoginComponentProps {
  navigation: ILoginStackNavigationProps;
}
