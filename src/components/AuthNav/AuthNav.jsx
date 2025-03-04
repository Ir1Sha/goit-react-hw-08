import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={NavLink}
        to="/register"
        variant="outlined"
        color="inherit"
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </Box>
  );
};

export default AuthNav;
