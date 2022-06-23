import { ErrorMessage, useField } from 'formik';

export const Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="field">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`field_input ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="on"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}