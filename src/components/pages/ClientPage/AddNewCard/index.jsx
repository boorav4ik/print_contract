import React, { useState } from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Customer from '../../../../services/customersApi';
import { customers } from '../../../../services/idb/schema';
import AddClientDialog from './AddClientDialog';

const Index = ({ refreshCustomers }) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Card sx={{ height: 160, textAlign: 'center' }}>
        <CardActionArea sx={{ width: '100%', height: '100%' }}>
          <Typography
            component="div"
            variant="h5"
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            + Add New Client Card
          </Typography>
        </CardActionArea>
      </Card>
      {openDialog && (
        <AddClientDialog
          schema={customers.indexes}
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          onSubmit={(event) => {
            event.preventDefault();
            const customerData = Object.keys(customers.indexes).reduce(
              (data, key) => ({
                ...data,
                [key]: event.target[key].value,
              }),
              {}
            );
            Customer.add(customerData);
            refreshCustomers();
            setOpenDialog(false);
          }}
        />
      )}
    </>
  );
};

Index.propTypes = {
  refreshCustomers: PropTypes.func.isRequired,
};
export default Index;
