import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AppBar, Toolbar, Box } from '@mui/material';

const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap'
        }}
      >
        <Navigation />
        {isLoggedIn ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexGrow: 1
            }}
          >
            <UserMenu />
          </Box>
        ) : (
          <AuthNav />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
