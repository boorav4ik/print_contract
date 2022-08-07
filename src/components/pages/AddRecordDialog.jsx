import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

import CompiletedWorkList from './CompletedWorksList';

const AddContractDialog = ({ open, onClose, onSubmit }) => {
  const [expanded, setExpanded] = useState(false);
  const [workList, setWorkList] = useState([{ id: 0, name: '', count: 0 }]);
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Добавление записи в карту клиента</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="сюда можно напечатать какой-то текст"
          fullWidth
          variant="standard"
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ height: 400, width: '100%' }}>
            <CompiletedWorkList
              workList={workList}
              onEditCommit={setWorkList}
            />
          </Box>
        </Collapse>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Удалить' : 'Добавить'} акт выполненых работ
        </Button>
        <Button
          color="success"
          onClick={() => {
            const data = {};
            if (expanded) onSubmit;
          }}
        >
          Cохранить
        </Button>
        <Button color="error" onClick={onClose}>
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddContractDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddContractDialog;
