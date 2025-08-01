import React from 'react'

type Props = {}

function Tradefair_annimation({}: Props) {
  return (
    <>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin'/>
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
    </>
  )
}

export default Tradefair_annimation