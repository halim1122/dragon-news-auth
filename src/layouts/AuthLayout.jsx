import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
     return (
          <div className='bg-base-200 min-h-screen'>
               <header className='w-10/12 mx-auto py-8'>
               <Navbar></Navbar>
               </header>
               <main className='flex justify-center mt-10'>
                    <Outlet></Outlet>
               </main>
          </div>
     );
};

export default AuthLayout;