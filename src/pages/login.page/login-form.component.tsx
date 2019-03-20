import { Button, Grid } from '@material-ui/core';
import { Field, Form, Formik, FormikActions, FormikBag } from 'formik';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ILoginFormValues } from '.';
import { AppNavigationEnum } from '../../app.navigation';
import { CheckboxComponent, InputComponent } from '../../components';

interface ILoginComponentProps {
  handleSubmit: (
    values: ILoginFormValues,
    formikActions: FormikActions<ILoginFormValues>,
  ) => void;
  handleChange?: (...args: any[]) => any;
  initialValues: ILoginFormValues;
}

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .required('Required')
    .email('Email field only')
    .max(25),
  password: Yup.string()
    .required('Required')
    .min(8)
    .max(40),
});

export const LoginFormComponent = ({
  handleChange,
  handleSubmit,
  initialValues,
}: ILoginComponentProps) => {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid item>
            <Field
              component={InputComponent}
              label="Email Address*"
              type="email"
              name="emailAddress"
              handleChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Field
              component={InputComponent}
              label="Password*"
              type="password"
              name="password"
              handleChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Field
              component={CheckboxComponent}
              label="Remember Me"
              name="rememberMe"
            />
          </Grid>
          <Grid item>
            <Link to={AppNavigationEnum.ForgotPassword}>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Button type="submit" disabled={isSubmitting} variant="outlined">
              Sign In
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
