import React from 'react'

const Attendance = () => {
  return (
      <div>
      <form>
  <div class="form-group">
    <label for="studentid">STUDENT_ID</label>
    <input type="number" class="form-control"  placeholder="Enter id" />
  </div>
  <div class="form-group">
    <label for="courseid">COURSEID</label>
    <input type="number" class="form-control" placeholder="Enter courseid" />
  </div>
  <div class="form-group">
    <label for="Attendance">ATTENDANCE</label>
    <input type="number" class="form-control" placeholder="Enter attendance percentage" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Attendance
