export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const ADD_USER = "ADD_USER"
export const DELETE_USER_ACTION = "DELETE_USER_ACTION";
export const EDIT_USER_ACTION = "EDIT_USER_ACTION"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const SIGNUP = "SIGNUP"

export interface User {
  id: number
  name: string
  address: string
  email: string
  contact: string
}

export interface UserAsync {
  loading: boolean;
  Users: User[];
  error: string;
  currentUser: User[]
}

export interface Admin {
  id: number
  username: string
  password: string
  email: string
}

export interface AdminAsync {
  loading: boolean
  admin: Admin[]
}

interface Signup extends AdminAsync {
  type: typeof SIGNUP
}
interface Login_request extends AdminAsync {
  type: typeof LOGIN_REQUEST
}
interface Login_success extends AdminAsync {
  type: typeof LOGIN_SUCCESS
}
interface FetchUsersRequest extends UserAsync {
  type: typeof FETCH_USER_REQUEST;
}
interface FetchUsersSuccess extends UserAsync {
  type: typeof FETCH_USER_SUCCESS;
}
interface FetchUsersFailure extends UserAsync {
  type: typeof FETCH_USER_FAILURE;
}
interface DeleteUserAction extends UserAsync {
  type: typeof DELETE_USER_ACTION
}
interface EditUserAction extends UserAsync {
  type: typeof EDIT_USER_ACTION
}
interface AddUserAction extends UserAsync {
  type: typeof ADD_USER
}

export type ActionTypes =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | DeleteUserAction
  | EditUserAction
  | AddUserAction
  | Login_request
  | Login_success
  | Signup

export type AppActions = ActionTypes;

export interface IInputWrapperProps {
  error?: string;
  children?: JSX.Element;
}
