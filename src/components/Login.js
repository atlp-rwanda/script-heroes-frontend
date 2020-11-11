import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <div className="container">
          <label>Email</label>
          <br></br>
          <input type="text" placeholder="Enter Email" required></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="text" placeholder="Enter Password" required></input>
          <br></br>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
