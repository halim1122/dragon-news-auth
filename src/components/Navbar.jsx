import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import user from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const Navigate = useNavigate();

  const {users,logout} = use(AuthContext);

  const handleLogout = ()=>{
    logout().then(() => {
      alert('are you sure! logout this side');
    }).catch((error) => {
      console.log(error);
    });
    Navigate('/auth/login')
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{users && users.email}</div>
      <div className="nav flex gap-5 ml-40 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="rounded-full" src={user} alt="" />
        {users ?<button onClick={handleLogout} className="btn btn-primary px-10 ">Logout</button>
:<Link to='/auth/login'  className="btn btn-primary px-10 ">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
