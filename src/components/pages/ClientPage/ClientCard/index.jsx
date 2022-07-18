import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import AddContractActionButton from './AddContractActionButton';
import ViewHistoryActionButton from './ViewHistoryActionButton';

const Index = ({ data }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 160,
    }}
  >
    <CardActionArea>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" noWrap>
          {data.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          noWrap
        >
          {data.email}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          noWrap
        >
          {data.gender} · {data.status}
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions disableSpacing sx={{ padding: 0.5 }}>
      <AddContractActionButton data={data} />
      <ViewHistoryActionButton data={data} />
    </CardActions>
  </Card>
);

Index.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Index;
