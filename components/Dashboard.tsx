import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { auth, logOut, useAuth } from '../firebase'
import Dash_header from './Dash_header'
import Header from './Header';
import LoginComp from './LoginComp'
import Modal from './Modal'
import { Box, Stack } from "@mui/material"
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { DotLoader, GridLoader } from 'react-spinners'



function Dashboard() {

    const [user, loading, error] = useAuthState(auth);
    const [userList, setUserList] = useState([])
    const currentUser = useAuth()
    const router = useRouter()
    const [showModal, setShowModal] = useRecoilState(modalState)

    // const getUsers = async () => {
    //     const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await responce.json()
    //     setUserList(data)
    // }  


    // if (!user){
    //     return <LoginComp />
    // }

    async function handleLogout(){
        await logOut()
        router.push('/login')
    }


    if (loading) return null
    
  return (
        <>
            <Head>
                <title>Dashboard &nbsp;|&nbsp; KMDMC</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            { user ? 
                <div>
                    <Dash_header />

                    <Stack direction={"row"} spacing={2} justifyContent="space-between" className='mt-20 pt-6'>
                        <Sidebar />
                        <Feed />
                        <Rightbar />
                    </Stack>

                    <Modal />
                </div>
            :
               <div>
                 <DotLoader /> 
                 { 
                 
                    router.push("/login") 
                 
                 }
               </div>
            }
        </>
  )
}

export default Dashboard