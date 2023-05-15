import { createContext } from "react";

export type UserContextProps = {
  user: {
    isAuthenticated: boolean;
    username: string;
    email: string;
  },
  actions?: {
    login(username: string, email: string): void;
    logout(): void;
    updateUser(username: string, email: string): void;
  }
}

export const UserContext = createContext<UserContextProps>({
  user: {
    isAuthenticated: false,
    username: '',
    email: ''
  },
  actions: {
    login: (username, email) => {},
    logout: () => {},
    updateUser: (username, email) => {}
  }
});