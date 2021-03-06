import { AxiosInstance } from 'axios';
import { action, observable } from 'mobx';
import { ILoginFormValues } from '.';
import { signInUser } from './login.api';
import { CredentialsEnum, DefaultCredentialsEnum } from './login.enum';

export class LoginStore {
  @observable public emailAddress: string = DefaultCredentialsEnum.emailAddress;

  @observable public password: string = DefaultCredentialsEnum.password;

  @observable public rememberMe = false;

  constructor() {
    const isFormPristine =
      this.emailAddress === DefaultCredentialsEnum.emailAddress &&
      this.password === DefaultCredentialsEnum.password;

    if (isFormPristine) {
      const values = [
        localStorage.getItem(CredentialsEnum.email),
        localStorage.getItem(CredentialsEnum.password),
      ];

      if (values.every(Boolean)) {
        this.setEmailAddress(values[0]!);
        this.setPassword(values[1]!);
      }
    }
  }

  @action
  public setEmailAddress = (value: string) => (this.emailAddress = value)

  @action
  public setPassword = (value: string) => (this.password = value)

  @action
  public setRememberMe = (value: boolean) => (this.rememberMe = value)

  public getAction(field: string) {
    // TODO Use enum
    switch (field) {
      case 'emailAddress': {
        return this.setEmailAddress;
      }
      case 'password': {
        return this.setPassword;
      }
      case 'rememberMe': {
        return this.setRememberMe;
      }
      default: {
        return;
      }
    }
  }

  public async signIn(
    apiInstance: AxiosInstance,
    { rememberMe, emailAddress, password }: ILoginFormValues,
  ) {
    this.setEmailAddress(emailAddress);
    this.setPassword(password);
    this.setRememberMe(rememberMe);

    const { token } = await signInUser(apiInstance, { emailAddress, password });

    if (token && rememberMe) {
      localStorage.setItem(CredentialsEnum.email, emailAddress);
      localStorage.setItem(CredentialsEnum.password, password);
    }

    return token;
  }
}

export const loginStore = new LoginStore();
