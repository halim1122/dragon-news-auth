import React from 'react';
import { Link } from 'react-router';

const Login = () => {
     return (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h2 className='font-bold text-2xl text-center mb-4'>Login your account</h2>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center mt-4'>Don't Have An Account? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
     );
};

export default Login;