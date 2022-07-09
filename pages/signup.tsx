// import Head from "next/head"
// import Image from "next/image"
// import { useState } from "react"
// import { SubmitHandler, useForm } from "react-hook-form";


// interface Input {
//     email: string
//     password: string
// }

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<Input>();


//     const [data, setData] = useState({
//         email: '',
//         password: ''
//     })

//     const handleLogin = (e: any) => {
//         e.preventDefault()
//         console.log(data)
//     }

//     return (
//         <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
//         <Head>
//             <title>KMDMC</title> 
//             <link rel="icon" href="/logo.png" />
//         </Head>

//         <Image 
//         src= {"/img/login/login2.jpg"}
//         layout= 'fill'
//         className='-z-4 !hidden opacity-60 sm:!inline' 
//         objectFit='cover'
//         />

//         <div className="absolute left-4 top-4 cursor-pointer rounded-md mb-3 bg-slate-200 p-3">
//             <img src="/logo.png" 
//             className=" object-contain md:left-10 md:top-6"
//             width={40} 
//             height={50} 
//             />
//         </div>

//         <form 
//         className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
//         onSubmit={handleLogin}
//         >
//             <h1 className='text-[#f1f1f1] text-4xl font-semibold'>Sign In</h1>
//             <div className="space-y-4">
//                 <label htmlFor="email" className='inline-block w-full'>
//                     <input type="email" id="email" placeholder="Email" className='input' onChange={(e: any) => setData({...data, email: e.target.value})} value={data.email}/>
//                     {errors.email && (
//                         <p className = "p-1 text-[13px] font-light text-orange-500">
//                              Please provide a invalid email
//                         </p> 
//                     )}
//                 </label>
//                 <label htmlFor="password" className='inline-block w-full'>
//                     <input type="password"  id="password" placeholder='Password' className='input' onChange={(e: any) => setData({...data, password:e.target.value})} value={data.password}{...register("password", {required: true})}/>
//                     {errors.password && (
//                         <p className = "p-1 text-[13px] font-light text-orange-500">
//                             Password is invalid
//                         </p> 
//                     )}
//                 </label>
//             </div>
//             <button type='submit' className='text-white w-full rounded bg-[#e50914] py-3 font-semibold'>
//                 Sign In
//             </button>

//             <div className="text-gray-400">
//                 New at KMDMC? {' '}
//                 <button className='hover:underline text-white'>Sign up now</button>
//             </div>
//         </form>
//     </div>
//     )
// }