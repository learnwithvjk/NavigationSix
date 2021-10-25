export type User = null | {
  userName?: string;
};

export interface IUser {
  user: User;
  logIn: Function;
  logOut: Function;
}
