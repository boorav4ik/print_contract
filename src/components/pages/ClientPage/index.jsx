import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Customer from '../../../services/customersApi';
import ClientCard from './ClientCard';
import AddNewCard from './AddNewCard';

const Index = () => {
  const [clienst, setClientst] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(true);
    return Customer.getAll()
      .then((data) => setClientst(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box
      sx={{
        height: 'calc(100% - 90px)',
        marginTop: 1,
        overflow: 'auto',
        minWidth: 600,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4} key={0}>
          <AddNewCard refreshCustomers={loadData} />
        </Grid>

        {isLoading ? (
          <CircularProgress />
        ) : (
          clienst.map((client) => (
            <Grid item xs={2} sm={4} md={4} key={client.id}>
              <ClientCard
                data={client}
                onDelete={() => {
                  Customer.delete(client.id);
                  loadData();
                }}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Index;
