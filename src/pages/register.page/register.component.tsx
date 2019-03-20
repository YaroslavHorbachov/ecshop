import { observer, useObservable } from 'mobx-react-lite';
import * as React from 'react';
import { registerStore } from './register.model';

export interface IRegisterComponentProps {}

export const RegisterComponent = observer(() => {
  const state = useObservable(registerStore);

  return (
    <div>
      <h1> Register Page </h1>
      <h2> Path: {state.path} </h2>
      <p> Coming soon ... </p>
      <button onClick={state.changePathToRandom}> Change </button>
    </div>
  );
});
