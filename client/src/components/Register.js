import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




const Register = () => {

  const [inputs, setInputs] = useState({
            rollno: "",
            sname: "",
            dob: "",
            email: "",
            cid: "",
            pno: ""
  });
  const [err,setError] = useState(null)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await axios.post("/add", inputs);
    
      navigate("/");
    } catch (err) {

      setError(err.response.data)
    }
  };

     
    
   


        
  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="rollno">ID</label>
    <input type="number"     onChange={handleChange} name="rollno" className="form-control"   placeholder="Enter id" />
  
  </div>
  
  <div className="form-group">
    <label htmlFor="sname">Student_name</label>
    <input type="string"  onChange={handleChange} name="sname" className="form-control"  placeholder="Enter name" />
  
  </div>

  <div className="form-group">
    <label htmlFor="dob">DOB</label>
    <input type="date"  onChange={handleChange} name="dob" className="form-control"  placeholder="Enter dob" />
  
  </div>

  <div className="form-group">
    <label htmlFor="email">EMAIL</label>
    <input type="string"  onChange={handleChange} name="email" className="form-control"  placeholder="Enter email" />
  
  </div>

  <div className="form-group">
    <label htmlFor="cid">COURSEID</label>
    <input type="string" onChange={handleChange} name="cid"  className="form-control"  placeholder="Enter courseid" />
  
  </div>

  <div className="form-group">
    <label htmlFor="pno">PHONENUMBER</label>
    <input type="number"  onChange={handleChange} name="pno" className="form-control"  placeholder="Enter phonenumber" />
  
  </div>
  
  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit} >Submit</button>
      {err && "Something went wrong!"}
      <Link to="/Home">See all students</Link>
</form>
    </div>
  )
}

export default Register
