import React, { useEffect, useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import schema from 'services/idb/schema';
import { DataGrid } from '@mui/x-data-grid';
import Service from '../../services/servicesApi';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);

  console.log(services);
  const loadServices = () =>
    Service.getAll()
      .then(setServices)
      .catch(() => {})
      .finally(() => setIsLoading(false));

  useEffect(() => {
    setIsLoading(true);
    loadServices();
  }, []);
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <DataGrid
        columns={[
          { field: 'name', headerName: 'Название', flex: 1 },
          { field: 'cost', headerName: 'Стоимость', width: 150 },
        ]}
        rows={services}
      />
      <Fab
        sx={{ bottom: 16, right: 16, position: 'absolute' }}
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab>
      {open && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Добавление новой услуги</DialogTitle>
          <DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const newService = Object.values(
                  schema.services.indexes
                ).reduce(
                  (data, { keyPath }) => ({
                    ...data,
                    [keyPath]: event.target[keyPath].value,
                  }),
                  {}
                );

                Service.add(newService).then(() => loadServices());
              }}
              style={{ display: 'flex', flexDirection: 'column', padding: 5 }}
            >
              {Object.values(schema.services.indexes).map(
                ({ keyPath, type }) => (
                  <TextField
                    sx={{ margin: 1 }}
                    name={keyPath}
                    label={keyPath}
                    key={keyPath}
                    id={keyPath}
                    type={type}
                    required
                  />
                )
              )}
              <div>
                <input type="submit" value="Добавить" />
                <input type="reset" value="Отмена" />
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default Index;
