import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import TabInfo from '../components/TabInfo'
import { useRouter } from 'next/router'
import { signUp} from '../firebase'
import { toast } from 'react-toastify'
import { FaGofore } from "react-icons/fa"
import Oauth from '../components/Oauth'

interface Props {
    name: string,
    email: string,
    password: string,
    // req: Promise<void>,
    // user: User,
    db: any
}

function signup() {
    const [loading, setLoading] = useState(false)


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const {name, email, password } = formData 

    const router = useRouter()

    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

        // const formDataCopy = [...formData]
    }

    const handleSignup = (e: any) => {
        e.preventDefault()
        setLoading(true)

        // Sign up user
        const req = signUp(name, email, password)  
        
        if(req) {
            setFormData((prevState) => ({
                ...prevState,
                name: "",
                email: "",
                password: ""
            }))
            router.push("/dashboard")
        }
        
        setLoading(false)
            
    }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">

         <TabInfo title="Sign up"/>
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
            className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
            onSubmit={handleSignup}>
                <h1 className='text-[#f1f1f1] text-4xl font-semibold'>Create account</h1>
                <div className="space-y-4">
                    <label htmlFor="name" className='inline-block w-full'>
                        <input id="name" name='name' placeholder="Name" className='input' onChange={onChange}/>
                    </label>
                    <label htmlFor="email" className='inline-block w-full'>
                        <input id="email" type="email" name="email" placeholder="Email" className='input' onChange={onChange}/>
                    </label>
                    <label htmlFor="password" className='inline-block w-full'>
                        <input id="password" type="password" name='password' placeholder='Password' className='input' onChange={onChange}/>
                    </label>
                </div>
                <button disabled={loading} type='submit' className='text-white w-full rounded bg-[#e50914] py-3 font-semibold'>
                    Sign Up
                </button>

                {/* OAuth */}
                 <Oauth />   
                <div className="signup text-white">
                    Already a user?{" "}
                    <Link href={"/login"} >
                        <span className='underline hover:scale-50 hover:text-gray-400 cursor-pointer'>Login</span>
                    </Link>
                </div>

        </form>
    </div>
  )
}

export default signup