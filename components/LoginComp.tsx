import React from 'react'
import Head from 'next/head'
import Image from "next/image"
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { SubmitHandler, useForm } from "react-hook-form"
// import { DotLoader, GridLoader } from 'react-spinners'
import { auth, signUp, logIn } from '../firebase'
import { useRef } from "react"
import Link from 'next/link'

interface Input {
    email: string,
    password: string
}


function LoginComp() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    const router = useRouter()
    const [login, loginSet] = useState(false)
    const [reg, regSet] = useState(false)
    // const [loginUser, setLoginUser] = useState(false)
    // const emailRef = useRef<HTMLInputElement>(null) 
    // const passwordRef = useRef<HTMLInputElement>(null)

    // const onSubmit: SubmitHandler<Input> = async ({ email, password }) => {
    const onSubmit: SubmitHandler<Input> = async ({email, password}) => {
        if (login) {
           let register = await signUp(email, password)
            
           if (register){
            alert('Registered!')
            router.push('dashboard/')
           }
        }

        if (reg) {
           let resume = await logIn(email, password)
            if(resume){
                alert("Login Succesfull!")
                router.push('dashboard/')
            }
        }
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

                    <div className='cursor-pointer relative'>
                        <Link href={'/'}>
                            <h3>Home</h3>
                        </Link>
                    </div>

                    <form 
                    className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-[#f1f1f1] text-4xl font-semibold'>Create account</h1>
                        <div className="space-y-4">
                            <label htmlFor="email" className='inline-block w-full'>
                                <input type="email" id="email" placeholder="Email" className='input' {...register("email", {required: true})}/>
                                {errors.email && (
                                    <p className = "p-1 text-[13px] font-light text-orange-500">
                                         Please provide a invalid email
                                    </p> 
                                )}
                            </label>
                            <label htmlFor="password" className='inline-block w-full'>
                                <input type="password" id="password" placeholder='Password' className='input' {...register("password", {required: true})}/>
                                {errors.password && (
                                    <p className = "p-1 text-[13px] font-light text-orange-500">
                                        Password is invalid
                                    </p> 
                                )}
                            </label>
                        </div>
                        <button type='submit' className='text-white w-full rounded bg-[#e50914] py-3 font-semibold' onClick={() => loginSet(true)}>
                            Sign In
                        </button>
                        <div className='text-white'>
                            <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
                        </div>
            
                        <div className="text-gray-400">
                            New at KMDMC? {' '}
                            <button className='hover:underline text-white' disabled= {loading} onClick={() => regSet(true)}>Sign up now</button>
                        </div>
                 </form>
          </div>
     </>
  )
}

export default LoginComp