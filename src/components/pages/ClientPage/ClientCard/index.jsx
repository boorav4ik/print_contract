import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { NoteAdd, Preview, Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Customer from '../../../../services/customersApi';

const Index = ({ data, onDelete }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 160,
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea
        onClick={() =>
          navigate('/clients/' + data.id, { replace: true, state: data })
        }
      >
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
        </CardContent>
      </CardActionArea>

      <CardActions
        disableSpacing
        sx={{ padding: 0.5, justifyContent: 'space-evenly' }}
      >
        <IconButton>
          <NoteAdd />
        </IconButton>
        <IconButton>
          <Preview />
        </IconButton>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton onClick={onDelete}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Index;
