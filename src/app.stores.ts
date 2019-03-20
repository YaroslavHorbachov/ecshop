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
}

export const appStores = {
  about: aboutStore,
  home: homeStore,
  login: loginStore,
  register: registerStore,
};
