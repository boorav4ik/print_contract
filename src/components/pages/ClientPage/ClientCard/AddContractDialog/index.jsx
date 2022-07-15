import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Services from 'services/servicesApi';

const Index = ({ open, onClose }) => {
  const [serviceList, setServiceList] = useState([]);
  const [servicesRendered, setServicesRendered] = useState([
    { id: 0, title: '', coast: 0 },
  ]);

  useEffect(() => {
    Services.getList()
      .then(setServiceList)
      .catch(() => {});
  }, []);
  const columns = [
    {
      field: 'title',
      headerName: 'Name of the service provided',
      type: 'singleSelect',
      valueOptions: serviceList.map(({ id, title }) => ({
        value: id,
        label: title,
      })),
      valueFormatter({ value }) {
        console.log(this);
        return (
          serviceList.find(({ id }) => id === value)?.title ??
          'Choose a service'
        );
      },
      // onChange(event) {
      //   console.log(event);
      // },
      flex: 1,
      editable: true,
      filterable: false,
    },
    {
      field: 'coast',
      headerName: 'Coast',
      width: 150,
      editable: false,
      filterable: false,
    },
  ];
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>New Contract</DialogTitle>
      <DialogContent>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={servicesRendered}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnSelector
          />
        </Box>
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
