import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import ModalConfirm from '../ModalConfirm/ModalConfirm';
import { Button, Box, Typography, Paper } from '@mui/material';
import EditContactModal from '../EditContactModal/EditContactModal';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const handleUpdate = (updatedContact) => {
    dispatch(updateContact(updatedContact));
    setIsEditModalOpen(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        maxWidth: 300,
        mx: 'auto',
        textAlign: 'center'
      }}
    >
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1" color="textSecondary">
        {number}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </Button>
      </Box>

      {isModalOpen && (
        <ModalConfirm
          message={`Are you sure you want to delete ${name}?`}
          onConfirm={handleDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {isEditModalOpen && (
        <EditContactModal
          contact={{ id, name, number }}
          onSave={handleUpdate}
          onCancel={() => setIsEditModalOpen(false)}
        />
      )}
    </Paper>
  );
};

export default ContactItem;
