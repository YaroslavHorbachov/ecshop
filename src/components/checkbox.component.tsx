import { Checkbox, FormControlLabel } from '@material-ui/core';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { ErrorMessage, FieldProps } from 'formik';
import * as React from 'react';

type checkboxComponentPropType = FieldProps<any> & FormControlLabelProps;

export const CheckboxComponent = ({
  field: { name, value },
  field,
  form: { touched, errors },
  label,
  ...props
}: checkboxComponentPropType) => {
  return (
    <>
      <FormControlLabel
        control={<Checkbox checked={value} {...field} />}
        label={label}
        {...props}
      />
      <ErrorMessage name={name} />
    </>
  );
};
