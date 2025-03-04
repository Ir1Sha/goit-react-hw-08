import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Phonebook App
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Manage your contacts easily and efficiently!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/contacts"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
