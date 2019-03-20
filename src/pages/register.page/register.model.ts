import { action, observable } from 'mobx';

export const registerModelType = Symbol.for('RegisterModelType');

const PATH = '/register';

export class RegisterStore {
  @observable public path = PATH;

  @action public changePathToRandom = () => {
    this.path = PATH + Math.random();
  }
}

export const registerStore = new RegisterStore();
