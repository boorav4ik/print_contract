import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

const Index = ({ schema, open, onClose, onSubmit }) => (
  <>
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Add New Client</DialogTitle>
      <DialogContent>
        <form
          id="add-client-form"
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmit}
        >
          {Object.entries(schema).map(([name, { required, label, type }]) => (
            <TextField
              key={name}
              label={label}
              variant="standard"
              required={required}
              name={name}
              type={type}
              defaultValue={
                type === 'date' ? new Date().toISOString().split('T')[0] : ''
              }
            />
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              haight: '1.5em',
              padding: '.5em',
            }}
          >
            <input type="submit" value="Создать" />

            <input type="reset" value="Отмена" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </>
);

Index.propTypes = {
  schema: PropTypes.shape({
    required: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Index;
