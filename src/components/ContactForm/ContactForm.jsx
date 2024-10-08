import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";

let validationSchema = yup.object({
  name: yup
    .string()
    .required("Required")
    .min(3, "To short")
    .max(50, "To long")
    .typeError("Must be a string"),
  number: yup
    .string()
    .required("Required")
    .min(3, "To short")
    .max(50, "To long")
    .typeError("Must be a number"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ saveContact }) => {
  const handleSubmit = (values, actions) => {
    saveContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.formField}>
          <label>Name</label>
          <br />
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
          <br />
          <br />
          <label>Number</label>
          <br />
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
          <br />
          <br />
          <button type="submit" className={css.addBtn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
