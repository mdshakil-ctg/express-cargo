import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {

   
   const createUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
   }
   
   const authInfo = {
      createUser,
   }
  

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;