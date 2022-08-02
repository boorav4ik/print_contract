import { Add, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Fab,
  Grid,
  List,
  ListItem,
  Modal,
  Paper,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Customer from '../../services/customersApi';

function useLocationState() {
  const location = useLocation();
  const [state, setState] = useState(location.state ?? {});
  useEffect(() => {
    if (!location.state)
      Customer.get(Number(location.pathname.split('/').at(-1))).then(setState);
  }, [location.pathname]);

  return state;
}

const Index = (props) => {
  const state = useLocationState();

  const [openAddNewRecord, setOpenAddNewRecord] = useState(false);
  return (
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
      <List>
        <ListItem component={Paper}>
          <form
            style={{ width: '100%' }}
            onSubmit={(event) => {
              event.preventDefault();
              console.log(event.target);
            }}
          >
            <TextField fullWidth name="description" />
            <br />
            <br />
            <input type="button" value="Акт выполненых работ" />
            <input type="submit" value="Сохранить" />
            <input type="reset" value="Отмена" />
          </form>
        </ListItem>
      </List>
    </Box>
  );
};

export default Index;
