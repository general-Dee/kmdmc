import React from 'react'
import Header from './Header'

import Gallery_card_collection from './Gallery_card_collection'
import { olarm } from '../data/projectPhotos'
import UploadForm from './UploadForm'


interface Props {
  projectPhotos: Array<any>
}

function Gallery({ projectPhotos }: Props) {
  return (
    <>
    <Header />

    <UploadForm />
    </>
  )
}

export default Gallery