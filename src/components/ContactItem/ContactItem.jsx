import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactItem.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactCard}>
      <span className={styles.contactName}>{name}</span>:
      <span className={styles.contactNumber}>{number}</span>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
