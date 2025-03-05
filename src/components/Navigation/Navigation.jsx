import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" color="inherit">
          Contacts
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
