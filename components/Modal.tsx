import React, { useState } from 'react'

const Modal = () => {
    // trach
    const [firstModal, setFirstModal] = useState(false);
    const[secondModal, setSecondModal] = useState(false);

    
    return(
        <div className="flex md:flex-col justify-center items-center mt-40">
            <div className="flex gap-5">
                {/* <h1>Modal bonanzer</h1> */}
                <button 
                type="button" 
                className=" w-auto px-6 h-12 bg-blue-600 text-white active:bg-black hover:bg-black rounded-lg flex justify-center items-center gap-2 font-bold"
                onClick={() => setFirstModal(true)}
                >
                    
                    Open the first Modal    
                </button> 
                <button 
                type="button" 
                className="border border-blue-300 shadow-md w-auto px-6 h-12 bg-white text-dark hover:text-white active:bg-black hover:bg-black rounded-lg flex justify-center items-center gap-2 font-bold"
                onClick={() => setSecondModal(true)}
                >
                    Open the second Modal    
                </button> 
            </div>
        {/* Render modals */}

        {/* First Modal */}
        { firstModal ? (
            <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
                <h2>Congratulations on making your first Modal</h2>
                <button 
                className='my-5 px-8 w-auto h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold'
                onClick={() => setFirstModal(false)}
                >Next Phase</button>
            </div>
        ) : null}
        </div>

    )        
}

export default Modal