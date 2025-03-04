import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      <Container component="main" sx={{ flexGrow: 1, mt: 8, mb: 8 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
