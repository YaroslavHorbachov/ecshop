import { observable } from 'mobx';

export class AboutStore {
  @observable public path = '/about';
}

export const aboutStore = new AboutStore();
