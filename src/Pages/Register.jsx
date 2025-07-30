import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {

  const {createUser} = useContext(AuthContext)
  const [error, setError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)

    console.log(name, email, photo, password)

    if(password.length < 6 || !hasUpperCase || !hasLowerCase){
      setError("Password should be greater than 6 characters and have atleast one Uppercase and a Lowercase letter.")
      return
    }
    else{
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
          e.target.reset()
        })
        .catch(error => {
          console.log("Error: ", error.message)
        })
    }

  };

  return (
    <form onSubmit={handleRegister}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Photo URL</label>
                <input type="text" name="photo" className="input" placeholder="Photo URL" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
