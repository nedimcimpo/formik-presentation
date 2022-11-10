import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CustomField } from "./components/CustomField";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Name is to short")
    .max(21, "Name is to long")
    .required("This field is required"),
  lastName: Yup.string()
    .min(3, "Last Name is to short")
    .max(21, "Last Name is to long")
    .required("This field is required"),
  email: Yup.string()
    .email("Email field is invalid")
    .min(3, "Email is to short")
    .max(21, "Email Name is to long")
    .required("This field is required"),
});

export default function FormikForm() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={schema}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form>
            <CustomField label="First Name" name="firstName" />
            <CustomField label="Last Name" name="lastName" />
            <CustomField label="Email" name="email" />
            <button
              disabled={!(isValid && dirty) || isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
