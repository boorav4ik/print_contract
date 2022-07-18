import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const Index = ({ rows, options, onServicesSelect }) => {
  // const [rows, setRows] = useState({ id: 0, title: '', coast: 0 });

  const columns = [
    {
      field: 'title',
      headerName: 'Name of the service provided',
      type: 'singleSelect',
      valueOptions: options.map(({ id, title }) => ({
        value: id,
        label: title,
      })),
      valueFormatter({ value }) {
        return (
          options.find(({ id }) => id === value)?.title ?? 'Choose a service'
        );
      },
      flex: 1,
      editable: true,
      filterable: false,
    },
    {
      field: 'coast',
      headerName: 'Coast',
      width: 150,
      editable: false,
      filterable: false,
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnSelector
        onCellEditCommit={onServicesSelect}
        // pagination={false}
        // autoPageSize={false}
        // pageSize={undefined}
      />
    </Box>
  );
};

Index.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.number,
      coast: PropTypes.number,
    })
  ).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
  onServicesSelect: PropTypes.func.isRequired,
};

export default Index;
