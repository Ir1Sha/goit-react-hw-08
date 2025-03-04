import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';

const modalRoot = document.getElementById('modal-root');

const EditContactModal = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: contact.id, name, number });
  };

  return createPortal(
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Number"
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            fullWidth
            margin="dense"
            required
          />
          <DialogActions>
            <Button onClick={onCancel} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>,
    modalRoot
  );
};

export default EditContactModal;
