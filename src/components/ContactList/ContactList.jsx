import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError
} from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem/ContactItem';
import { CircularProgress, Typography, Box } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={3}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Typography variant="h6" color="error" textAlign="center">
        Error: {error}
      </Typography>
    );

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        mt: 3,
        px: 2
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};

export default ContactList;
