import React, { createContext, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

     const [users,setUsers]=useState(null);

     const userInfo ={
          users,
          setUsers
     };

     return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;