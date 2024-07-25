
import './App.css';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import { Button } from '@mui/material';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <h1>Registration Form</h1>
     <TextField id="standard-basic" label="Fisrt Name" variant="standard" />
     <TextField id="standard-basic" label="Last Name" variant="standard" />
     <TextField id="standard-basic" label="Mobile" variant="standard" />
     <TextField id="standard-basic" label="Email" variant="standard" />
     <TextField id="standard-basic" label="Password" variant="standard" />
     <TextField id="standard-basic" label="Confirm Password" variant="standard" />
     <TextField id="standard-basic" label="Date of Birth" variant="standard" />
     <Button className="form-field" variant="contained">Submit</Button>

     <Footer/> 
    </div>
  );
}

export default App;