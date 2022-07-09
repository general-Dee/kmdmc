import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from '../../components/Dashboard';
import { auth } from "../../firebase"


const admin = () => {
           
    return (
        <Dashboard />   
    )
}

export default admin
