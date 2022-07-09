import React, { useEffect, useState } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { ProgressBar } from "./ProgressBar"
import { v4 } from "uuid"
import { url } from 'inspector'


interface Props {
  res: string,
}

function UploadForm() {
  const [ imageUpload, setImageUpload ] = useState(null)
  const [ imageList, setImageList] = useState([])

  const imageListRef = ref(storage, "images/")

  const uploadImage = () => {
    // exit if there is no image
    if(imageUpload == null) return

    // Using firebase functions to upload images
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}` )

    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded!")
    })

  }

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      // console.log(res)
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList(imageList.push(url))
        })
      })
    })
  }, [])

  return (
    <div className='mt-20 pt-20'>
      <input type="file" name="file" id="file" onChange={(event) => setImageUpload(event.target.files[0])}/>
      <button onClick={uploadImage}>Upload</button>
    </div>
  )




  // const [imageUpload, setImageUpload] = useState(null)
  // const [file, setFile] = useState(null)
  // const [ error, setError ] = useState(null)

  // const types = ['image/png', 'image/jpeg']

  // const changeHandler = async (e: any) => {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   let selected = e.target.files[0]
  //   let res = "Please select Aan Imagre with only PNG & JPG extentions"
    
  //   if(selected && types.includes(selected.type)) {
  //     setFile(selected)
  //     setError(null)
  //   } else {
  //     setFile(null)
  //     setError(res)
  //   }
    
  // }
  // return (
  //   <div className='w-[80%] mx-auto py-40'>
  //     <form>
  //       {/* <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/> */}
  //       {/* <input type="file" onChange={changeHandler} /> */}
  //       <div className='output'>
  //         {error && <div>{ error }</div>}
  //         {file && <div> { file.name }</div>}
  //         {file && <ProgressBar file={file} setFile={setFile}/> }
  //       </div>
  //     </form>
  //   </div>
  // )
}

export default UploadForm