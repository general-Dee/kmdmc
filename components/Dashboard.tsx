// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { modalState } from '../atoms/Atom'
// // import { auth, logOut, useAuth } from '../firebase'
// import Dash_header from './Dash_header'
// import Header from './Header';
// // import LoginComp from './LoginComp'
// import Modal from './Modal'
// import { Box, Stack } from "@mui/material"
// import Sidebar from './Sidebar'
// import Feed from './Feed'
// import Rightbar from './Rightbar'
// import { DotLoader, GridLoader } from 'react-spinners'
// import { getAuth } from 'firebase/auth'



// function Dashboard() {
//     const auth = getAuth()
//     if(auth)
//         console.log(auth.currentUser)

//   return (
//         <>
//             <Head>
//                 <title>Dashboard &nbsp;|&nbsp; KMDMC</title>
//                 <link rel="icon" href="/logo.png" />
//             </Head>

//                 <div>
//                     <Dash_header />

//                     <Stack direction={"row"} spacing={2} justifyContent="space-between" className='mt-20 pt-6'>
//                         <Sidebar />
//                         <Feed />
//                         <Rightbar />
//                     </Stack>
//                     <Modal />
//                 </div>
            
//         </>
//   )
// }

// export default Dashboard