import { Add } from '@mui/icons-material';
import { Box, Grid, Fab, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Customer from '../../services/customersApi';
import AddRecordDialog from './AddRecordDialog';

function useLocationState() {
  const location = useLocation();
  const [state, setState] = useState(location.state ?? {});
  useEffect(() => {
    if (!location.state)
      Customer.get(Number(location.pathname.split('/').at(-1))).then(setState);
  }, [location.pathname]);

  return state;
}

const Index = () => {
  const state = useLocationState();

  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Box
        sx={{
          paddingTop: 3,
          width: '100%',
          height: '100%',
        }}
      >
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3}>
              {[state.surname, state.name, state.secondName].join(' ')}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>{`${state.email} ${state.phone}`}</Paper>
          </Grid>
        </Grid>
        <Fab
          onClick={() => setOpenDialog(true)}
          sx={{ bottom: 16, right: 16, position: 'absolute' }}
        >
          <Add />
        </Fab>
      </Box>
      <AddRecordDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={(data) => console.log(data)}
      />
    </>
  );
};

export default Index;
