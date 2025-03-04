import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
        'Number must match the format XXX-XXX-XXXX'
      )
      .required('Required')
  });

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" textAlign="center" mb={2}>
        Add New Contact
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                required
                fullWidth
              />
              <TextField
                label="Number"
                name="number"
                value={values.number}
                onChange={handleChange}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default ContactForm;
