import React from 'react'

function MemoForm() {
  return (
    <>
          <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
            <XIcon className="h-6 w-6 text-white" onClick={handleClose}/>
          </button>
          <div className="flex items-center justify-center h-full">
            <div className="bg-white/50 p-20 w-[70%]">
              <h2 className="mb-5 font-mono text-xl text-center">Create new memo</h2>
              <form>
                <div>
                  <input type="text" className="px-6 py-2 w-full rounded-lg focus:outline-none shadow-sm" placeholder="Send To"/>
                </div>
                <div>
                  <input type="text" className="px-6 py-2 w-full rounded-lg focus:outline-none shadow-sm mt-5" placeholder="Type"/>
                </div>
                <div>
                  <input type="date" className="px-6 py-2 w-[50%] rounded-lg focus:outline-none shadow-sm mt-5" placeholder="Date"/>
                  <label htmlFor="approval" className="mx-[10%]">Approval required?
                    <input type="checkbox" name="approval" id="approval" className="ml-2 px-6 py-2 w-70 rounded-lg focus:outline-none shadow-sm mt-5" placeholder=""/>
                  </label>  
                </div>
                <div>
                  <input type="text" className="px-6 py-2 mt-5 w-full rounded-lg focus:outline-none shadow-sm" placeholder="Subject"/>
                </div>
                <div>
                  <textarea name="message" id="message" cols="30" rows="10" className="p-2 w-full rounded-lg focus:outline-none shadow-sm mt-5" placeholder="Enter memo body"></textarea>
                </div>
                
              </form>
            </div>
          </div>
        </>
  )
}

export default MemoForm