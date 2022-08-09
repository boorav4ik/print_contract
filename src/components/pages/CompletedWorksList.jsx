import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Service from '../../services/servicesApi';

function findById(id) {
  return (item) => id === item.id;
}

const CompletedWorksList = ({ workList, onEditCommit }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    Service.getAll()
      .then(setOptions)
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    {
      field: 'name',
      headerName: 'Название услуги',
      type: 'singleSelect',
      valueOptions: options.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
      valueFormatter({ value }) {
        if (value === '') return 'Выберете услугу';
        return options.find(findById(value)).name;
      },
      flex: 1,
      editable: true,
      filterable: false,
    },
    {
      field: 'count',
      headerName: 'Колчество',
      editable: true,
      type: 'number',
    },
    {
      field: 'total',
      headerName: 'Стоимость',
      width: 150,
      editable: false,
      filterable: false,
      valueGetter({ row }) {
        return row.name === '' ? 0 : row.count * row.cost;
      },
    },
  ];

  return (
    <DataGrid
      rows={workList}
      columns={columns}
      disableColumnSelector
      onCellEditCommit={({ id, field, value }) => {
        const list = JSON.parse(JSON.stringify(workList));
        if (field === columns[0].field) {
          list[id] = {
            ...list[id],
            name: value,
            count: list[id].count || 1,
            cost: options.find(findById(value)).cost,
          };
          if (list.length === id + 1) {
            list.push({ id: list.length, name: '', count: 0 });
          }
          return onEditCommit(list);
        }

        list[id][field] = value;
        return onEditCommit(list);
      }}
    />
  );
};

CompletedWorksList.propTypes = {
  workList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      count: PropTypes.number,
      coast: PropTypes.number,
    })
  ).isRequired,
  onEditCommit: PropTypes.func.isRequired,
};

export default CompletedWorksList;
