import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material'
import {
  ExitToAppRounded,
  SettingsRounded,
  AccountCircleRounded,
} from '@mui/icons-material'
import { useState } from 'react'
import { useAuth } from 'src/context/authContext'

const MenuAuth = () => {
  const { user, logOut } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)

  console.log(user)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogOut = async () => {
    setAnchorEl(null)
    try {
      await logOut()
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title="Configuracion de usuario">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar
            alt={user.displayName || user.email}
            src={user.photoURL}
            sx={{ width: '2rem', height: '2rem' }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleRounded fontSize="small" />
          </ListItemIcon>
          {user.displayName || user.email}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsRounded fontSize="small" />
          </ListItemIcon>
          Configuración
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <ExitToAppRounded fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuAuth
