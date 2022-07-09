import Head from 'next/head'
import Image from "next/image"
import LoginComp from '../components/LoginComp'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SubmitHandler, useForm } from "react-hook-form"
import { DotLoader, GridLoader } from 'react-spinners'
import { auth } from '../firebase'
import Dashboard from '../components/Dashboard'
// import router from 'react'




interface Input {
    email: string
    password: string
}

function Login() {   
    const [user, loading, error] = useAuthState(auth) 
    const router = useRouter()

        if(loading) {
            return(
                <div className='w-screen h-screen flex justify-center items-center'>
                    <DotLoader />
                </div>
                )
        }

        if(!user) {
            return (
                <LoginComp />
            )
        } 

        return  (
            <Dashboard />
        )



    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() =>{
    //         setLoading(false)
    //     }, 4000)
    // })

  
}

export default Login