import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor={"red"} flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>Comments</Box>
  )
}

export default Rightbar