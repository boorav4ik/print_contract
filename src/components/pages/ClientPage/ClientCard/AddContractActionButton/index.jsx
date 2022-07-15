import React, { useState } from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import AddContractDialog from '../AddContractDialog';

const Index = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <React.Fragment key={data.id}>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        + Add New Contract
      </Button>
      {openDialog && (
        <AddContractDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
        />
      )}
    </React.Fragment>
  );
};

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
