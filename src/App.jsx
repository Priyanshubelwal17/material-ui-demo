import { useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from "@mui/icons-material/Alarm"

import './App.css'
import RatingDemo from './RatingDemo';

function App() {


  return (
    <div className='buttons' >
      <RatingDemo />
      {/* <Button variant="text" onClick={() => alert("chudail")}>Text</Button>
      <Button color='error' variant="contained" onClick={() => alert("goo")}>click</Button>

      <IconButton color='secondary' aria-label='add on alarm'>
        <AlarmIcon />
      </IconButton> */}
    </div>
  )
}

export default App
