import React from 'react' 


const Course=()=>{ 
	
	return(
	<div>
		<table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">sl.no</th>
      <th scope="col">Course_name</th>
      <th scope="col">Course_id</th>
	  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Computer Science</td>
      <td>CSE201</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Electronics and communication</td>
      <td>ECE202</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Electronics and Electrical</td>
      <td>EEE203</td>
    </tr>
	<tr>
      <th scope="row">4</th>
      <td>Electronics and Biomedicak</td>
      <td>EB204</td>
    </tr>
	<tr>
      <th scope="row">5</th>
      <td>Mechanical</td>
      <td>ME205</td>
    </tr>
  </tbody>
</table>
	</div>
)} 
export default Course;
