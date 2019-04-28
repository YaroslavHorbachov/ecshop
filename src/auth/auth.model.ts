import axios from 'axios';
import { action, IReactionDisposer, observable, reaction } from 'mobx';

export class AuthService {
  @observable private token = '';

  @observable private instance = axios.create({
    baseURL: 'http://localhost:3030',
    headers: {
      'X-Client': 'EC-SHOP',
    },
  });

  private instanceUpdateDisposer: IReactionDisposer;

  constructor() {
    this.instanceUpdateDisposer = reaction(
      () => this.token,
      (token) => {
        this.instance.defaults.headers.common.Authorization = token;
      },
    );
  }

  public getToken = () => this.token;

  public getInstance = () => this.instance;

  @action
  public removeInstanceUpdateReaction = () => this.instanceUpdateDisposer()

  @action
  public setToken = (token: string) => (this.token = token)

  @action
  public deleteToken = () => (this.token = '')
}

export const authService = new AuthService();
