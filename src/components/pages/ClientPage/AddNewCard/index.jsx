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

const Index = () => {
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
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogContent>
            <form
              id="add-client-form"
              style={{ display: 'flex', flexDirection: 'column' }}
              // action="http://google.com"
            >
              <TextField
                id="client-surname"
                label="Surname"
                variant="standard"
                required
              />
              <TextField
                id="client-name"
                label="Name"
                variant="standard"
                required
              />
              <TextField
                id="client-second-name"
                label="Second name"
                variant="standard"
                required
              />
              <TextField id="client-phone" label="Phone" variant="standard" />
              <TextField id="client-email" label="E-mail" variant="standard" />
              <TextField
                id="client-pasport-id"
                label="Pasport ID"
                variant="standard"
                required
              />
              <TextField
                id="client-pasport-department"
                label="By whom and when issued"
                variant="standard"
                required
              />
              {/* <button type="submit">Find</button> */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button>Save</Button>
            <Button>Print</Button>
            <Button>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Index;
