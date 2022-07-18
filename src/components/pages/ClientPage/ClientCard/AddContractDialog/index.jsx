import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import PropTypes from 'prop-types';
import Services from 'services/servicesApi';
import ServicesDataGrid from './ServiceDataGrid';

const Index = ({ open, onClose }) => {
  const [services, setServises] = useState([
    { id: 0, title: -1, coast: Infinity },
  ]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    Services.getList()
      .then(setOptions)
      .catch(() => {});
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>New Contract</DialogTitle>
      <DialogContent>
        <ServicesDataGrid
          rows={services}
          options={options}
          onServicesSelect={({ id, value }) => {
            const list = JSON.parse(JSON.stringify(services));
            const service = options.find((s) => s.id === value);
            list[id] = { id, title: service.id, coast: service.user_id };
            if (id + 1 === list.length) {
              list.push({ id: id + 1, title: -1, coast: Infinity });
            }
            setServises(list);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button>Save</Button>
        <Button>Print</Button>
        <Button>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

Index.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // data: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   gender: PropTypes.string.isRequired,
  //   status: PropTypes.string.isRequired,
  // }),
};

export default Index;
