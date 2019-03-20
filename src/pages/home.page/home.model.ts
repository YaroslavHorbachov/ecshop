import { observable } from 'mobx';

export class HomeStore {
  @observable public path = '/';
}

export const homeStore = new HomeStore();
