export interface IUserState {
  isAuthenticated: boolean;
  username: string;
  email: string;
}

export interface IUserAction {
  type: 'login' | 'logout' | 'updateUser';
  payload?: {
    username: string;
    email: string;
  }
}

export const userContextReducer = (state: IUserState, action: IUserAction): IUserState => {
  switch (action.type) {
    case 'login':
      return {
        isAuthenticated: true,
        username: action.payload?.username || '',
        email: action.payload?.email || '',
      }
    case 'logout':
      return {
        isAuthenticated: false,
        username: '',
        email: '',
      }
    case 'updateUser':
      return {
        ...state,
        username: action.payload?.username || '',
        email: action.payload?.email || ''
      }
    default:
      return state;
  }
}