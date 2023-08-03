import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { getLocation } from 'src/routes/pages.routes'
import MenuAuth from './MenuAuth'
import MenuNotifications from './MenuNotifications'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const Navegar = useNavigate()
  const [openNavbar, setOpenNavbar] = useState()

  const handleToggleNavbar = () => {
    setOpenNavbar(!openNavbar)
  }

  const styles = {
    NavBar: {
      height: openNavbar ? '1000%' : '4rem',
      display: 'flex',
      alignItems: 'start',
      position: 'relative',
      transition: openNavbar
        ? 'height 500ms cubic-bezier(1, 0, 1, 1)'
        : 'height 500ms cubic-bezier(0, 1, 1, 1)',
    },
    Logo: {
      width: '100%',
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      paddingLeft: '3rem',
    },
    Logotipo: {
      color: 'background.default',
    },
    Pagina: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'default',
    },
    Boton: {
      width: '25%',
      minWidth: '15rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0,
    },
    Titulo: {
      padding: '0.85rem',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      color: 'background.default',
      cursor: 'pointer',
    },
    Tab: {
      width: '100%',
      height: '0.4rem',
      borderRadius: '0.5rem 0.5rem 0 0',
      backgroundColor: 'background.default',
      cursor: 'pointer',
    },
    Acciones: {
      width: '100%',
      height: '4rem',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      gap: '1.5rem',
      boxSizing: 'border-box',
      paddingRight: '3rem',
      color: 'background.default',
    },
  }

  return (
    <Box sx={styles.NavBar}>
      <Box sx={styles.Logo}>
        <Typography variant="h5" sx={styles.Logotipo}>
          Deal Cargo
        </Typography>
      </Box>
      <Box sx={styles.Pagina}>
        <Button sx={styles.Boton} onClick={handleToggleNavbar}>
          <Box sx={styles.Titulo}>{getLocation()}</Box>
          <Box sx={styles.Tab}></Box>
        </Button>
      </Box>
      <Box sx={styles.Acciones}>
        <MenuNotifications />
        <MenuAuth />
      </Box>
    </Box>
  )
}

export default NavBar
