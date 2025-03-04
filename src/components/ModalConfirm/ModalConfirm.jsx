import { createPortal } from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';

const modalRoot = document.getElementById('modal-root');

const ModalConfirm = ({ message, onConfirm, onCancel }) => {
  return createPortal(
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          Yes, delete
        </Button>
      </DialogActions>
    </Dialog>,
    modalRoot
  );
};

export default ModalConfirm;
