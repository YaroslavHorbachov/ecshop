import { observer, useObservable } from 'mobx-react-lite';
import * as React from 'react';
import { homeStore } from './home.model';

export const HomeComponent = observer(() => {
  const store = useObservable(homeStore);

  return (
    <div>
      <h1> Home Page </h1>
      <h2> Path {store.path} </h2>
      <p> Coming soon ...</p>
    </div>
  );
});
