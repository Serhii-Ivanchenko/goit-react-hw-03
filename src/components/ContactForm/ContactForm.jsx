import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required to fill!')
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Must be not longer than 50 characters'),
  number: Yup.string()
    .required()
    .min(3, 'must be at least 3 characters long')
    .max(50, 'must be not longer than 50 characters'),
});

export default function ContactForm({ onContactAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid(10);

  return (
    <Formik
      initialValues={{
        id: '',
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
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
          <ErrorMessage name="name" component="span"/>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
          <ErrorMessage name='number'component="span"/>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
