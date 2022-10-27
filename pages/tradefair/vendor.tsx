import { useState } from 'react'
import { motion } from 'framer-motion'
import Auth_header from '../../components/Auth_header'
import Head from 'next/head'
import Tradefair_annimation from '../../components/Tradefair_annimation'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useRouter } from 'next/router'

type Props = {}

function sponsours({}: Props) {
      
    const [fullname, setFullname ] = useState("")
    const [phone, setPhone ] = useState("")
    const [email, setEmail ] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [typeOfTrade, setTypeOfTrade] = useState("")
    const [numberOfStalls,  setNumberOfStalls ] = useState("")
    const [returningTrader,  setReturningTraders ] = useState(false)
    const router = useRouter()

    const clearForm = () => {
      setFullname("")
      setPhone("")
      setEmail("")
      setBusinessName("")
      setTypeOfTrade("")
      setNumberOfStalls("")
      setReturningTraders(false)
  }

    const handleSubmit = async (event: any) => {
      event.preventDefault();

    //   console.log(fullname, email,phone, businessName, typeOfTrade, numberOfStalls, returningTrader)

      if (fullname == "" || email == "" || phone == "" || businessName == "" ||  typeOfTrade == "") {
          clearForm()
          toast.error("All fields are required!")

      } else {
          // const dbCollection = db
          setFullname(fullname)
          setEmail(email)
          setPhone(phone)
          setBusinessName(businessName)
          setTypeOfTrade(typeOfTrade)
          setNumberOfStalls(numberOfStalls)
          setReturningTraders(returningTrader)

          const collectionRef = collection(db, "vendors")
          const payLoad = { fullname, email, phone, businessName, typeOfTrade, numberOfStalls, returningTrader }
          await addDoc(collectionRef, payLoad)
          toast.success("Registration Successful")
          clearForm()
          router.push('/confirmation')
      }
  }

  return (
    <motion.div className="">
    <Head>
      <title>Home &nbsp;|&nbsp; KMDMC</title>
      <link rel="icon" href="/logo.png" />
    </Head>
    <Auth_header />
  
        <div className='tradefair_container'>
              <div className='w-full flex h-screen lg:w-1/2 bg-gray-100 items-center justify-center'>
              <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
          <h1 className='text-3xl font-semibold'>Kaduna Markets Tradefair</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please ender your details</p>

          <div className='mt-8'>
            <form onSubmit={handleSubmit} >
              <div>
                  <label htmlFor="fullname" className='text-lg font-medium'>Full Name</label>
                  <input type="text"  onChange={(e) => setFullname(e.target.value)} value={fullname} id='fullname' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
              </div> 
              <div>
                  <label htmlFor="phone" className='text-lg font-medium'>Phone Number</label>
                  <input type="number"  onChange={(e) => setPhone(e.target.value)} value={phone} id='phone' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
              </div> 
              <div>
                  <label htmlFor="email" className='text-lg font-medium'>Email</label>
                  <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} id='email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
              </div> 
              <div>
                  <label htmlFor="password" className='text-lg font-medium'>Business Name</label>
                  <input type="text" onChange={(e) => setBusinessName(e.target.value)} value={businessName} id="password" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your business name'/>
              </div>
              <div>
                  <label htmlFor="typeOfTrade" className='text-lg font-medium'>Type of trade</label>
                  <input type="text" onChange={(e) => setTypeOfTrade(e.target.value)} value={typeOfTrade} id="typeOfTrade" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
              </div>
              <div>
                  <label htmlFor="numberOfStalls" className='text-lg font-medium'>How many stalls do you require?</label>
                  <input type="text" onChange={(e) => setNumberOfStalls(e.target.value)} value={numberOfStalls} id="numberOfStalls" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='How many stalls would you like?'/>
                  {/* <input type="text" onChange={({ target }) => setNumberOfStalls(target.value)} value={numberOfStalls} id="numberOfStalls" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='How many stalls would you like?'/> */}
              </div>
              <div className='mt-5'>
                  <label htmlFor="returningTrader"> Returning Trader? </label>
                  <input type="checkbox" 
                  id="returningTrader" 
                  checked={returningTrader}
                  onChange={(e) => setReturningTraders(e.target.checked)}
                  className='cursor-pointer h-8 w-16 rounded-full appearance-none bg-gray-200 checked:bg-pink-300 bg-opacity-5 border-2 border-violet-700 transition duration-200 relative'/>
              </div>
              <div className='mt-8 flex flex-col gap-y-4'>
              <button 
                    // onChange={(e) => setReturningTraders(e.target.value)}
                    className='text-white font-medium ml-2 bg-violet-500 px-4 py-6 rounded-full'>Register</button>
              </div> 
              </form>
          </div>
      </div>
          </div>
          <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-50'>
              <Tradefair_annimation />
          </div>
    </div>
    {/* <Footer /> */}
  </motion.div>
  )
}

export default sponsours