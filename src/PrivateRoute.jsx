import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './service/isLoggedIn';

const PrivateRoutes = () => {


   if (isLoggedIn()) {
    return <Outlet/>
   }
   else{
    return <Navigate to={"/login"} />
   }
}

export default PrivateRoutes;