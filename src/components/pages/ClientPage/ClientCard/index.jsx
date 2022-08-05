import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import {
  NoteAdd,
  Preview,
  Edit,
  Delete,
  Phone,
  AlternateEmail,
} from '@mui/icons-material';

const Index = ({ data, onDelete, ...props }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 160,
      justifyContent: 'space-between',
    }}
  >
    <CardActionArea>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" noWrap>
          {[data.surname, data.name, data.secondName].join(' ')}
        </Typography>
        <Chip icon={<Phone />} label={data.phone} />
        <Chip icon={<AlternateEmail />} label={data.email} />
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

Index.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Index;
