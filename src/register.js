

import './App.css'
import axios from "axios";

import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


export default function Create(){
    try {
    } catch (error) {
      console.log(error.message);
    }
    const navigate=useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
       phone: "",
    
    });
    const [error, setError] = useState("");
    const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
    async function handle(e) {
      e.preventDefault();
      const url = "https://server-hep.herokuapp.com/api/bank/register";
      axios
        .post(url,{
          name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phone,
         
        },config
        )
        
        .then((res) => {
          if (res.status === 400) {
            console.log("Something went wrong");
          } else {
            alert("Registerd Successfully");
            navigate("/login")
            console.log(res);
          }
        })
        .catch((error) => {
          setError(error.response.data)
          console.log(error);
        });
        //console.log(data);
    }
   

 
    return (
        <>
        <center>

        <div className="forms">
          <label>
      <div className='square'>
          <div>
            <h1 className="size">Create Account</h1>
            </div>
               <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                /><br></br>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setValues({ ...values, email: e.target.value })
                  }
                /><br></br>
                <br></br>
                <input
        
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                /><br></br>
                <br></br>
                 <input
            
                  type="number"
                  placeholder="Enter PhoneNumber"
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                />
                     {error && <div>{error}</div>}
                     <br></br>
                     <br></br>
                     <button type="submit" onClick={handle}>
                                Register
                                </button>
                                </div>
                                 </label>
                                 </div>
                     </center>
             </>
      );
    }
    