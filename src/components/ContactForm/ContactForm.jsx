import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';


export default function ContactForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
