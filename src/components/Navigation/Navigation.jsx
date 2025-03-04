import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Navigation = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      <Button component={NavLink} to="/contacts" color="inherit">
        Contacts
      </Button>
    </Box>
  );
};

export default Navigation;
