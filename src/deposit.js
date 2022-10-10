

import { useState } from "react";
// import {useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Deposit(){


const token=localStorage.getItem('x-auth');
const navigate=useNavigate();
const[bal,setbal]=useState(0);
 const [values,setValues]=useState(0);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth':token
    }
  };
 async function deposite(e) {
    e.preventDefault();
    const url = "https://server-hep.herokuapp.com/api/bank/update";
    axios
      .post(url, {
        deposite:values
      },config
      )
      
      .then((res) => {
       
        console.log(res.data)
        setbal(res.data.balance)
      })
      .catch((error) => {
      
        console.log(error);
         
        })
      // console.log(data);
  }
  
  
  

 
  
 
  return(<>

<center>
<div className="deposit">
<div className='cubic'>
 
  <h4>Account Deposit Balance is ${bal}</h4>
  <br></br>
  <label>
  <input
							type="number"
							placeholder="Enter amount"
							name="deposit"
              onChange={(e) =>
                setValues(Number(e.target.value))
              }
							required
							
						/><br></br><br></br>
 <button onClick={deposite}>Submit</button>

  </label>
  
  </div>
  </div>
  </center>
  </>)
}