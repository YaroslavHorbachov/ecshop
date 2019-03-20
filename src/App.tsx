import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import { AppNavigationEnum } from './app.navigation';
import { AppHeader } from './header';
import history from './history';
import {
  AboutComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
} from './pages';

export const App = () => (
  <>
    <CssBaseline />
    <Router history={history}>
      <div className="App">
        <header>
          <AppHeader />
        </header>

        <div className="App-main">
          <Route path={AppNavigationEnum.Login} component={LoginComponent} />
          <Route
            path={AppNavigationEnum.Register}
            component={RegisterComponent}
          />
          <Route path={AppNavigationEnum.About} component={AboutComponent} />
          <Route
            exact
            path={AppNavigationEnum.Home}
            component={HomeComponent}
          />
        </div>
      </div>
    </Router>
  </>
);
