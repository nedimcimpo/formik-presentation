import React from "react";
import { Formik } from "formik";
import { cities } from "./cities";

export default function FormikFormSimple() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.city) {
            errors.city = "Required";
          }
          return errors;
        }}
      >
        {({
          values,
          handleSubmit,
          isValid,
          dirty,
          isSubmitting,
          handleBlur,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="First Name"
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>

            <div className="field">
              <label>City</label>
              <select name="city" onChange={handleChange}>
                <option value="" label="Select city">
                  Select city
                </option>
                {cities.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <button
              disabled={!(isValid && dirty) || isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
