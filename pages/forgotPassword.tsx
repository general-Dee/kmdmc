import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { resetPassword } from '../firebase'

interface Props {}

function ForgotPassword(props: Props) {
    // const {} = props
    const [email, setEmail] = useState("")
    
    const onChange = (e: any) => setEmail(e.target.value)

    const onSubmit = async (e: any) => {
        e.preventDefault()

        email ? resetPassword(email) : toast.error("Email is required")
    }
    return (
        <>
            <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
                <Head>
                    <title>KMDMC</title> 
                    <link rel="icon" href="/logo.png" />
                </Head>
                
                <Image 
                src= {"/img/login/login2.jpg"}
                layout= 'fill'
                className='-z-4 !hidden opacity-60 sm:!inline' 
                objectFit='cover'
                />
                    

                <div className="absolute left-4 top-4 cursor-pointer rounded-md mb-3 bg-slate-200 p-3">
                    <img src="/logo.png" 
                    className=" object-contain md:left-10 md:top-6"
                    width={40} 
                    height={50} 
                    />
                </div>

                <form 
                className='relative mt-24 w-[500px] sm:w-[80%] mx-auto sm:mt-40 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14' onSubmit={onSubmit}>
                    <h1 className='text-[#f1f1f1] text-4xl font-semibold'>Reset Password</h1>
                    <div className="space-y-4">
                        <label htmlFor="email" className='inline-block w-full'>
                            <input type="email" id="email" name="email" placeholder="Email" className='input'value={email} onChange={onChange} />
                        </label>
                    </div>
                    <button type='submit' className='text-white w-full rounded bg-[#e50914] py-3 font-semibold'>
                        Send Reset Link
                    </button>
                    <div className='text-white flex justify-between'>
                        <Link href={"/login"}>
                            <p className='text-white/60 cursor-pointer hover:text-white'> Login to existing account?</p>
                        </Link>
                    </div>

                    <div className="signup text-white">
                        Not a user? &nbsp;&nbsp;
                        <Link href={"/signup"} >
                            <span className='underline hover:scale-50 hover:text-gray-400 cursor-pointer'>Signup</span>
                        </Link>
                    </div>

            </form>
         </div>
        </> 
    )
}

export default ForgotPassword
