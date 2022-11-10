import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { CustomField } from "./components/CustomField";

const initialValues = {
  students: [
    {
      firstName: "",
      lastName: "",
      email: "",
    },
  ],
};

export default function FieldArrayForm() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="students">
              {({ remove, push }) => (
                <div>
                  {values.students.length > 0 &&
                    values.students.map((student, index) => (
                      <div key={index}>
                        <CustomField
                          label="First Name"
                          name={`students.${index}.firstName`}
                        />
                        <CustomField
                          label="Last Name"
                          name={`students.${index}.lastName`}
                        />
                        <CustomField
                          label="Email"
                          name={`students.${index}.email`}
                        />

                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() =>
                      push({ firstName: "", lastName: "", email: "" })
                    }
                  >
                    Add student
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Invite</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
