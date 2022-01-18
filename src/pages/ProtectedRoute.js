import React  from 'react';

import { Redirect, Route } from "react-router-dom";

import { useSelector } from 'react-redux';
import { isEmpty } from '../utils';


export default function ProtectedRoute ({component : Component , ...restOfProps}) {
    
    console.log({...restOfProps})

    const userData = useSelector((state) => state.user);
    const isAuthenticated =  !isEmpty(userData.isSignedIn) ? true : false ;


    


    return (
        <Route {...restOfProps} render={(props)=> {
            if(isAuthenticated) {
               return <Component {...props} />;
            }else{
              return <Redirect to="/login" /> 
            } 
        }} />
    );
}