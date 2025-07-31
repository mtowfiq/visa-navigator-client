import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [error, setError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault();
    setError("")

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)

    console.log(name, email, photo, password)

    if(password.length < 6){
      setError("Password should be greater than 6 characters.")
      console.log("validation triggered")
      return
    }
    else if(!hasLowerCase){
      setError("Password should have a Lower Case letter")
      console.log("validation triggered lower")
      return
    }
    else if(!hasUpperCase){
      setError("Password should have an Upper Case letter")
      console.log("validation triggered upper")
      return
    }
    else{
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
          setError("")
          e.target.reset()
        })
        .catch(error => {
          console.log("Error: ", error.message)
          setError(error.message)
        })
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" required />
                
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />
                
                <label className="label">Photo URL</label>
                <input type="text" name="photo" className="input" placeholder="Photo URL" />
                
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                
                <Link className="mt-1.5 text-center" to="/authentication/login">Already have an account? <span className="text-blue-500">Login</span></Link>
                
                <button className="btn btn-neutral mt-4">Register</button>
              </div>
            </form>
            
            {error && (
              <div className="text-red-600 my-2 font-medium text-center">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;