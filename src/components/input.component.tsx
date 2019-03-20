import { Grid, TextField } from '@material-ui/core';
import { ErrorMessage, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

interface IInputComponentProps {
  handleChange?(...args: any[]): void;
}

type IInputComponentFormType = FieldProps<any> & IInputComponentProps;

export const InputComponent = ({
  field: { name },
  field,
  form: { touched, errors },
  handleChange,
  ...props
}: IInputComponentFormType) => {
  const error = errors[name];
  const isTouched = touched[name];
  const isError = Boolean(isTouched && error);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (handleChange) {
        handleChange(e);
      }
      field.onChange(e);
    },
    [],
  );

  return (
    <Grid direction="column">
      <TextField error={isError} {...field} {...props} onChange={onChange} />
      <div>
        <ErrorMessage name={name} />
      </div>
    </Grid>
  );
};
