import React from 'react';
import { Field as FormikField, FieldProps } from 'formik';

type FormTextFieldProps = {
    name: string;
    placeholder: string;
};

export function TextField({ field, form, ...props }: FieldProps) {
    return <input {...field} {...props} style={{ color: 'red' }} />;
}

export function FormTextField(props: FormTextFieldProps) {
    return (
        <FormikField name={props.name}>
            {(fieldProps) => <TextField {...fieldProps} {...props} />}
        </FormikField>
    );
}

/*
type FormTextFieldProps = {
  name: string;
  placeholder: string;
};

export function TextField<V, K>({ field, form, ...props }: FieldProps<V, K>) {
  return <input {...field} {...props} style={{ color: 'red' }} />;
}

export function FormTextField<V, K>(props: FormTextFieldProps) {
  return (
    <FormikField<V, K> name={props.name}>
      {fieldProps => <TextField<V, K> {...fieldProps} {...props} />}
    </FormikField>
  );
}
*/
