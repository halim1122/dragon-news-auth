import React from 'react';
import { Link } from 'react-router';

const Register = () => {

     const handleSubmit =(e)=>{
          e.preventDefault();
          const name =e.target.name.valur;
          const photo =e.target.photo.valur;
          const email =e.target.email.valur;
          const password =e.target.password.valur;
          console.log(name,photo,email,password);

     }
     return (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-10">
      <div className="card-body">
          <h2 className='font-bold text-2xl text-center mb-4'>Register your account</h2>
        <form onSubmit={handleSubmit} className="fieldset">
          {/* name field */}
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          {/* Photo url field */}
          <label className="label">Photo</label>
          <input type="text" className="input" name='photo' placeholder="Photo url" />
          {/* Email field */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center mt-4'>Already Have An Account? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </form>
      </div>
    </div>
     );
};

export default Register;