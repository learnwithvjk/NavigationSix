import {IUser} from 'src/types/user/User';

export function createUser(): IUser {
  return {
    user: null,
    logIn: () => {},
    logOut: () => {},
  };
}
