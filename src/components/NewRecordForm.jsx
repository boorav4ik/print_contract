import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  function onChange(event) {
    setValue(event.target.value);
  }
  return { value, onChange };
}
const Index = ({ onSubmit, onReset }) => {
  const description = useInput();
  const [services, setServices] = useState([]);
  return (
    <Box>
      <TextField multiline fullWidth {...description} />
    </Box>
  );
};
export default Index;
