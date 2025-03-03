import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required')
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>

          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
