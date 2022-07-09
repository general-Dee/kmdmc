import { useState, useEffect} from 'react'
import { storage } from '../firebase'
// import { ref, uploadBytes } from "firebase/storage"


interface Props {
    err: string,

}

export const useStorage = (file: any) => {
    const [ progress, setProgress ] = useState(0)
    const [ error, setError ] = useState(null)
    const [ url, setUrl ] = useState(null)

    useEffect(() => {
        // references
        const storageRef = storage.ref(file.name)

        storageRef.put(file).on('state_changed', (snap: any) => {
            let percentage = (snap.bytestransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err: Props) => {
            setError(err)
        }, async()=> {
            const url = await storageRef.getDownLoadURL()
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

// export default useStorage