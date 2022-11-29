import { useState } from "react"
import React from 'react'

const Edit = () => {


     
    
        const [inpval, setINP] = useState({
            name: "",
            email: "",
            age: "",
            mobile: "",
            work: "",
            add: "",
            desc: ""
        })
    
        const setdata = (e) => {
            console.log(e.target.value);
            const { name, value } = e.target;
            setINP((preval) => {
                return {
                    ...preval,
                    [name]: value
                }
            })
        }
    


        
  return (
    <div>
      <form>
  <div class="form-group">
    <label for="id">ID</label>
    <input type="number" value={inpval.id} onChange={setdata} name="id" class="form-control"  placeholder="Enter id" />
  
  </div>
  
  <div class="form-group">
    <label for="name">Student_name</label>
    <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control"  placeholder="Enter name" />
  
  </div>

  <div class="form-group">
    <label for="dob">DOB</label>
    <input type="number" value={inpval.dob} onChange={setdata} name="dob" class="form-control"  placeholder="Enter dob" />
  
  </div>

  <div class="form-group">
    <label for="email">EMAIL</label>
    <input type="text" value={inpval.email} onChange={setdata} name="email" class="form-control"  placeholder="Enter email" />
  
  </div>

  <div class="form-group">
    <label for="courseid">COURSEID</label>
    <input type="number" value={inpval.courseid} onChange={setdata} name="courseid"  class="form-control"  placeholder="Enter courseid" />
  
  </div>

  <div class="form-group">
    <label for="phonenumber">PHONENUMBER</label>
    <input type="number" value={inpval.phonenumber} onChange={setdata} name="phonenumber" class="form-control"  placeholder="Enter phonenumber" />
  
  </div>
  
  <button type="submit" class="btn btn-primary">Update</button>
</form>
    </div>
  )
}

export default Edit
