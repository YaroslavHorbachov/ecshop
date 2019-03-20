import { observer, useObservable } from 'mobx-react-lite';
import * as React from 'react';
import { HomeStore } from '../home.page';
import { LoginStore } from '../login.page';
import { RegisterStore } from '../register.page';
import { aboutStore } from './about.model';

interface IAboutComponentProps {
  loginStore: LoginStore;
  homeStore: HomeStore;
  registerStore: RegisterStore;
}

export const AboutComponent = observer<IAboutComponentProps>(
  ({ homeStore, loginStore, registerStore }) => {
    const store = useObservable(aboutStore);

    return (
      <div>
        <h1> About Page </h1>
        <h2> Path {store.path}</h2>
        <p>Login : {JSON.stringify(loginStore)}</p>
        <p>Home : {JSON.stringify(homeStore)}</p>
        <p>Register : {JSON.stringify(registerStore)}</p>
        <p> Coming soon ...</p>
      </div>
    );
  },
);
