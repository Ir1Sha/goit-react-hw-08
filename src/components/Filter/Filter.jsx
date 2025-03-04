import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { TextField, Box } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
      <TextField
        label="Find contacts"
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        variant="outlined"
        size="small"
        sx={{ width: '100%', maxWidth: 300 }}
      />
    </Box>
  );
};

export default SearchBox;
