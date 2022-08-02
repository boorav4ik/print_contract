import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import Customer from '../../../../services/customersApi';

const Index = ({ refreshCustomers }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState({});
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
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogContent>
            <form
              id="add-client-form"
              style={{ display: 'flex', flexDirection: 'column' }}
              onChange={(event) => {
                event.preventDefault();
                const { name, value } = event.target;
                setData({ ...data, [name]: value });
              }}
            >
              <TextField
                id="client-surname"
                label="Surname"
                variant="standard"
                required
                name="surname"
              />
              <TextField
                id="client-name"
                label="Name"
                variant="standard"
                required
                name="name"
              />
              <TextField
                id="client-second-name"
                label="Second name"
                variant="standard"
                required
                name="secondName"
              />
              <TextField
                id="client-phone"
                label="Phone"
                variant="standard"
                name="phone"
              />
              <TextField
                id="client-email"
                label="E-mail"
                variant="standard"
                name="email"
              />
              <TextField
                id="client-pasport-id"
                label="Pasport ID"
                variant="standard"
                required
                name="passport"
              />
              <TextField
                id="client-pasport-department"
                label="By whom and when issued"
                variant="standard"
                required
                name="pasport-department"
              />
              {/* <button type="submit">Find</button> */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialog(false);
                Customer.add(data);
                refreshCustomers();
              }}
            >
              Create
            </Button>
            <Button>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

Index.propTypes = {
  refreshCustomers: PropTypes.func.isRequired,
};
export default Index;
