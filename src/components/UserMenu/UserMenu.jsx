import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
      >
        Welcome, {user.name}!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => dispatch(logout())}
        sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem' } }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
