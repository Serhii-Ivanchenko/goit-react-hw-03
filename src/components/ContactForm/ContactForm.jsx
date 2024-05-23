import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';

export default function ContactForm({ onContactAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid(10);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {

        onContactAdd({
          id: contactId,
          name: values.name,
          number: values.number,
        });
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
