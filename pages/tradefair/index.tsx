import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Auth, onAuthStateChanged, User } from 'firebase/auth'
import Login from '../../components/auth/Login'
import Register from '../../components/auth/Register'
import Home from '../../components/auth/Home'


// type Props = {
// }

function index() {
  const [user, setUser] = useState(null)
  const [authState, setAuthState] = useState(null)

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, 
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home')
        } else {
          setUser(null)
          setAuthState('login')
        }
      })

      return unSubscribeAuth
  }, [user])

  if( authState === null ) return <div className='font-bold text-center text-5xl'>Loading...</div>
  if( authState === 'login' ) return <Login setAuthState={setAuthState} setUser={user} />
  if( authState === 'register' ) return <Register setAuthState={setAuthState} setUser={user} />
  if( user ) return <Home setAuthState={setAuthState} setUser={setUser} user={user}/>
   return (
    <div className='flex justify-center items-center text-5xl font-bold text-center'>
      <h1>Tradefair 2.0</h1>
    </div>
  )
}

export default index