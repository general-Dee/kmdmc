import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

// interface Props {
//     id: string,
//     timestamp: string,
// }

function Getmemo() {
    const [memos, setMemos] = useState([])
    const collectionRef = collection("memos")

    useEffect(() => {
      const getMemos = async () => {
        const querySnapshot = await getDocs(collectionRef(db, "memos"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data())
        });
            }, [])

  return (
    <div>
        {/* {memos.map((memo) => <div key={memo.id}>{memo.subject}</div>)} */}
    </div>
  )
}

export default Getmemo