import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
const ProtectRole = ({ role }) => {
     const userInfo = {
        name : "rayhan",
        role : "writer"
    }

    if(userInfo.role === role){
        return <Outlet/>
    }
    else{
        return <Navigate to='/dashboard/unable-to-access'/>
    }
}

export default ProtectRole