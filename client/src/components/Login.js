import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" class="btn btn-primary">Login</button>
</form>
   
    </div>
  )
}

export default Login

 
   
   