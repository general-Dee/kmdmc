import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useState } from 'react'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={"/"}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href={"/about"}>
            <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href={"/contact"}>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
        <Link href={"/news"}>
            <MenuItem onClick={handleClose}>News</MenuItem>
        </Link>
        <Link href={"/projects"}>
            <MenuItem onClick={handleClose}>Projects</MenuItem>  
        </Link>
      </Menu>
    </div>
  )
}
// Footer
// © 2022 GitHub, Inc.