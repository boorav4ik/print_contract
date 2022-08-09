import { Add, Send, TextSnippet } from '@mui/icons-material';
import {
  Box,
  Grid,
  Fab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Record from 'services/recordsApi';
import Customer from '../../services/customersApi';
import AddRecordDialog from './AddRecordDialog';
import generateContract from '../../utils/generateContract';

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

  const [records, setRecords] = useState([]);

  function loadRecords() {
    return Record.getAll().then((data) =>
      setRecords(data.filter(({ customerId }) => customerId === state.id))
    );
  }

  useEffect(() => {
    if (state.id) {
      loadRecords();
    }
  }, [state.id]);
  console.log(state.id, records);
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
        <List>
          {records.map(({ id, date, description, services }) => (
            <ListItem
              key={id}
              secondaryAction={
                services.length > 0 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <IconButton
                      color="secondary"
                      onClick={() => generateContract(state, services)}
                    >
                      <TextSnippet />
                    </IconButton>
                    <IconButton color="primary">
                      <Send />
                    </IconButton>
                  </Box>
                )
              }
            >
              <ListItemText
                primary={description}
                secondary={
                  services.length > 0 && (
                    <TableContainer
                      component={Paper}
                      sx={{ width: 'calc(100% - 40px)' }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell>Количество</TableCell>
                            <TableCell>Стоимость</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {services.map(({ name, cost, count }) => (
                            <TableRow
                              key={name}
                              sx={{
                                '&:last-child td, &:last-child th': {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {name}
                              </TableCell>
                              <TableCell>{count}</TableCell>
                              <TableCell>{count * cost}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )
                }
              />
            </ListItem>
          ))}
        </List>
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
        onSubmit={(data) =>
          Record.add({ ...data, customerId: state.id }).then(loadRecords)
        }
      />
    </>
  );
};

export default Index;
