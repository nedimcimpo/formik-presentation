import { ErrorMessage, Field } from "formik";

export const CustomField = ({ name, label }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Field type="text" name={name} placeholder={label} />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};
