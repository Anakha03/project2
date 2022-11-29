import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const Home=()=>{ 
  const navigate=useNavigate()
	
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
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>29-01-03</td>
      <td>mark@gmail.com</td>
      <td>201</td>
      <td>993124678</td>
      <td className='d-flex justify-content-between' >
        <button className='btn btn-success' onClick={()=>{navigate('/view');}}><RemoveRedEyeIcon /></button>
        <button className='btn btn-primary' onClick={()=>{navigate('/edit');}}><CreateIcon /></button>
        <button className='btn btn-danger'><DeleteOutlineIcon /></button>
      </td>
    </tr>

    
  </tbody>
</table>
          </div>
         </div>



)} 
export default Home;
