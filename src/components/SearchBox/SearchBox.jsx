import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel} htmlFor="search">
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={styles.searchInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
