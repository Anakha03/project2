import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Attendance = () => {

  
  


  const [inputs, SetInputs] = useState({
    studentid: "",
    courseid: "",
    attend: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/attadd", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };







  return (
      <div>
      <form>
  <div class="form-group">
    <label for="studentid">STUDENT_ID</label>
    <input type="number" class="form-control" onChange={handleChange} name="studentid" placeholder="Enter id" />
  </div>
  <div class="form-group">
    <label for="courseid">COURSEID</label>
    <input type="string" class="form-control"onChange={handleChange} name="courseid" placeholder="Enter courseid" />
  </div>
  <div class="form-group">
    <label for="Attendance">ATTENDANCE</label>
    <input type="decimal" class="form-control" onChange={handleChange} name="attend" placeholder="Enter attendance percentage" />
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

<button className='btn btn-success' onClick={()=>{navigate('/viewatt');}}><RemoveRedEyeIcon /></button>

    </div>







  )
}

export default Attendance
