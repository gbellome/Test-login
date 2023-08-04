import { HomeRounded, ConstructionRounded } from '@mui/icons-material'
import { Box, Fade, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Pages = {
  Inicio: <HomeRounded />,
  Configuracion: <ConstructionRounded />,
}

export const getLocation = () => {
  const location = useLocation()
  const pathname = location.pathname.slice(1)
  return (
    <Fade in={true}>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        {Pages[pathname]}
        <Typography variant="h4">{pathname}</Typography>
      </Box>
    </Fade>
  )
}
