import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Container, Typography, Box } from '@mui/material';

const RegistrationPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Registration
        </Typography>
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
