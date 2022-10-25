import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Timer from './timer';

function App() {
  return (
    <>
      <AppBar position='sticky' color='success'>
        <Toolbar>
          <Typography variant='h1'>Timer</Typography>
        </Toolbar>
      </AppBar>
      <Timer />
    </>
  );
}

export default App;


