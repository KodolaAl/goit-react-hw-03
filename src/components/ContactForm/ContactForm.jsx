import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const nameFieldId = useId();
  const telFieldId = useId();
  //   const handleSubmit = (values, actions) => {
  //     console.log(values);
  //     actions.resetForm();
  //   };

  return (
    <Formik
      initialValues={{
        username: "",
        tel: "",
      }}
      onSubmit={() => {}}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={nameFieldId}
        />
        <label className={css.label} htmlFor={telFieldId}>
          Number
        </label>
        <Field className={css.field} type="tel" name="number" id={telFieldId} />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
