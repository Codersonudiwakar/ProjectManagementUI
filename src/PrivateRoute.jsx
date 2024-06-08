import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {


   if (true) {
    return <Outlet/>
   }
   else{
    return <Navigate to={"/login"} />
   }
}

export default PrivateRoutes;