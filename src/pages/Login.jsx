import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
const Navigate = useNavigate();

     const {handlesignIn, setUsers}=use(AuthContext);

     const handleLogin=(e)=>{
          e.preventDefault();
          const email =e.target.email.value;
          const password =e.target.password.value;

          handlesignIn(email,password).then(result=>{
               console.log(result);
               setUsers(result.user);
          }).catch(error=>{
               console.log(error);
          })
          Navigate('/');
     }
     return (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h2 className='font-bold text-2xl text-center mb-4'>Login your account</h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" required name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" required name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center mt-4'>Don't Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
     );
};

export default Login;