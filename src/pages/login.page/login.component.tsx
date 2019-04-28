import { Grid } from '@material-ui/core';
import { FormikActions, FormikValues } from 'formik';
import { observer, useObservable } from 'mobx-react-lite';
import * as React from 'react';
import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { storeContext } from '..';
import { AppNavigationEnum } from '../../app.navigation';
import history from '../../history';
import { LoginFormComponent } from './login-form.component';
import { loginStore, LoginStore } from './login.model';

export interface ILoginComponentProps {}

export interface ILoginFormValues {
  emailAddress: string;
  password: string;
  rememberMe: boolean;
}

export const LoginComponent = observer(() => {
  const store = useObservable(loginStore);
  const { auth } = useContext(storeContext);
  const handleSubmit = useCallback(
    async (
      values: ILoginFormValues,
      formikActions: FormikActions<FormikValues>,
    ) => {
      const token = await store.signIn(auth.getInstance(), values); // TODO. Move to separate file

      if (token) {
        auth.setToken(token);
        history.push('/profile');
      }

      formikActions.setSubmitting(false);
    },
    [],
  );
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const action = store.getAction(e.target.name);

    if (action) {
      action(e.target.value as never);
    }
  },                               []);
  const getInitialValues = ({
    emailAddress,
    password,
    rememberMe,
  }: LoginStore): ILoginFormValues => ({
    emailAddress,
    password,
    rememberMe,
  });

  return (
    <Grid container direction="column">
      <LoginFormComponent
        initialValues={getInitialValues(store)}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Link to={AppNavigationEnum.Register}>Create an account</Link>
    </Grid>
  );
});
