import { HomeRounded, ConstructionRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Pages = {
  Home: <HomeRounded />,
  Configuration: <ConstructionRounded />,
}

export const getLocation = () => {
  const location = useLocation()
  const pathname = location.pathname.slice(1)
  return (
    <>
      {Pages[pathname]}
      <Typography variant="h4">{pathname}</Typography>
    </>
  )
}
