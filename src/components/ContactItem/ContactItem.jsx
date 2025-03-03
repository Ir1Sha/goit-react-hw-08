import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { resetFilter } from '../../redux/filters/slice';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    if (contacts.length === 1) {
      dispatch(resetFilter());
    }
  };

  return (
    <li className={styles.contactCard}>
      <span className={styles.contactName}>{name}</span>:
      <span className={styles.contactNumber}>{number}</span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
