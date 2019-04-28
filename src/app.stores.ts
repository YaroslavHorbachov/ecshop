import { createContext } from 'react';
import { AuthService, authService } from './auth';
import {
  AboutStore,
  aboutStore,
  HomeStore,
  homeStore,
  LoginStore,
  loginStore,
  RegisterStore,
  registerStore,
} from './pages';

export interface IAppStores {
  about: AboutStore;
  home: HomeStore;
  login: LoginStore;
  register: RegisterStore;
  auth: AuthService;
}

export const appStores = {
  about: aboutStore,
  home: homeStore,
  login: loginStore,
  register: registerStore,
  auth: authService,
};

export const storeContext = createContext(appStores);
