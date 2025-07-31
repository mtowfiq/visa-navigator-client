import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext)

  const handleLogout = () =>{
    signOutUser()
    .then(() =>{
      console.log("sign out successful")
    })
    .catch(error =>{
      console.log(error.message)
    })
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <Link className="btn btn-ghost text-xl">VisaHub</Link>
  </div>
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1 space-x-6">
      <Link to="/">Home</Link>
      <Link>All Visas</Link>
      <Link>Add Visa</Link>
      <Link>My added visas</Link>
      <Link>My visa applications</Link>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? (<div>
        Logged in <br />
        <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
      </div>) : (<div>
          <Link to='/authentication/register' className="btn">Registser</Link>
      </div>)
    }
  </div>
</div>
  );
};

export default Navbar;
