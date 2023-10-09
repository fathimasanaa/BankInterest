import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';








function App() {

  const[principle,setprinciple]=useState("")

  const[rate,setRate]=useState("")

  const[year,setYear]=useState("")

  const[interest,setInterest]=useState(0)


  // submit define

  const calculateInterest=(e)=>{

    e.preventDefault()

    console.log(principle,rate,year);

    if(!principle||!rate||!year){

      alert('Please fill the form completely')

    }
    else{
      setInterest(principle*rate*year/100)
    }


  }

  const resetForm=()=>{
    setprinciple("")
    setRate("")
    setYear("")
    setInterest(0)


  }


  return (
    <>

      <div className="app">

        <div className='container'>

          {/* heading */}

          <div className='heading-text'>

            <h2 className='title'>SIMPLE INTEREST CALCULATOR</h2>
            <p className='subtitle'>calculate your simple interest easly</p>

          </div>

          {/* card */}

          <div className='amount-card'>

            <div className='card-text'>
              <h3 className='total-amount'>  ₹{interest}</h3>
              <p className='total-para'>TOTAL SIMPLE INTEREST</p>

            </div>


          </div>

          <form onSubmit={calculateInterest}>

            {/* to hold text field */}

            <div className='text-fields'>

              {/* principle amount */}

              <div className='input'>
                <TextField  value={principle ||""} onChange={e=>setprinciple(e.target.value)}
                 className='outlined-basic' id="outlined-basic" label="Principle amount" variant="outlined" />

              </div>

              {/* interest */}

              <div className='input'>
                <TextField   value={rate ||""} onChange={e=>setRate(e.target.value)}
                 className='outlined-basic' id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" />

              </div>

              {/* year */}

              <div className='input'>
                <TextField   value={year ||""} onChange={e=>setYear(e.target.value)}
                 className='outlined-basic' id="outlined-basic" label="Time period (yr)" variant="outlined" />

              </div>


            </div>

            {/* button */}

            <div className='btn-group'>

              <Stack direction="row" spacing={2}>
                <Button className='btn' type='submit' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
                <Button  className='btn' onClick={resetForm} variant="outlined">Reset</Button>
              </Stack>

            </div>


          </form>


        </div>

      </div>

    </>




  );
}

export default App;
