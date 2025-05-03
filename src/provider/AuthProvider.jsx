import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.utiliti';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

     const [users,setUsers]=useState(null);

     const authRegister =(email,password)=> {
         return createUserWithEmailAndPassword(auth,email,password);
     }

     const logout =()=>{
         return signOut(auth);
     }

     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
               setUsers(currentUser);
          });
          return ()=>{
               unsubscribe();
          }
     },[])
     const userInfo ={
          users,
          setUsers,
          authRegister,
          logout
     };

     return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;