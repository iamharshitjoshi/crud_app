import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  "../../App.css";

const AddUser = () => {
 const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
  })

  const {name,username, email} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit=async(e)=>{
   
   
     e.preventDefault();
     await axios.post("http://localhost:3003/users", user);
     navigate("/",{replace:true})
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto my-4 shadow p-5">
        <h2 className="text-center mb-4 ">ADD USER</h2>
        <form mt-3 mb-3 onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
         
          <button type="submit" className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
