import React, { useEffect, useState } from "react";

const Login = () => {
  const [userLogin, setUserLogin] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
        "https://66d806e137b1cadd8053106b.mockapi.io/Users"
      );
      if (response === 200) {
        const singleUser = dataa.filter(Options=> Options.email === )
      }

}

  useEffect(() => {
    

    fetchUserLogin();
  }, []);

 
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => LoginEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  onChange={(e) => LoginPassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Login;
