import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState,useEffect } from 'react';
import axios from 'axios';



const Home=()=>{ 
  const navigate=useNavigate()
  const [value, SetValue] = useState([]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8000/list");
        SetValue(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudents();
  }, []);

  console.log(value);
	
	return(

      

        <div className="mt-5">
          <div className="container">
              <div className="add_btn mt-2 mb-2">
                <button className='btn btn-primary'onClick={()=>{navigate('/components/Register');}}>Add data</button>
              </div>

            
<table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">Student_name</th>
      <th scope="col">DOB</th>
      <th scope="col">email</th>
      <th scope="col">courseid</th>
      <th scope="col">Phonenumber</th>
    </tr>
  </thead>
 
  <tbody>
   {value.map((student) =>
    <tr >
      <td>{student.rollno}</td>
      <td>{student.sname}</td>
      <td>{student.dob}</td>
      <td>{student.email}</td>
      <td>{student.cid}</td>
      <td>{student.pno}</td>
                               
      
      <td className='d-flex justify-content-between' >
        <button className='btn btn-success' onClick={()=>{navigate('/view');}}><RemoveRedEyeIcon /></button>
        <button className='btn btn-primary' onClick={()=>{navigate('/edit');}}><CreateIcon /></button>
        <button className='btn btn-danger'><DeleteOutlineIcon /></button>
      </td>
      
  
      </tr>
  
  ) }
  </tbody>
</table>
          </div>
         </div>



)} 
export default Home;
