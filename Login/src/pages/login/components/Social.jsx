import styled from '@emotion/styled'
import Fab from '@mui/material/Fab'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import useScreenSize from './../../../hooks/useScreenSize'

const Social = () => {
  const { width } = useScreenSize()

  return (
    <Contenedor>
      <Fab
        size={width < 480 ? 'medium' : 'large'}
        color="secondary.light"
        sx={{
          ':hover': { bgcolor: 'primary.main', color: 'white' },
        }}
      >
        <GoogleIcon />
      </Fab>
      <Fab
        size={width < 480 ? 'medium' : 'large'}
        color="secondary.light"
        sx={{
          ':hover': { bgcolor: 'primary.main', color: 'white' },
        }}
      >
        <FacebookIcon />
      </Fab>
      <Fab
        size={width < 480 ? 'medium' : 'large'}
        color="secondary.light"
        sx={{
          ':hover': { bgcolor: 'primary.main', color: 'white' },
        }}
      >
        <TwitterIcon />
      </Fab>
      <Fab
        size={width < 480 ? 'medium' : 'large'}
        color="secondary.light"
        sx={{
          ':hover': { bgcolor: 'primary.main', color: 'white' },
        }}
      >
        <LinkedInIcon />
      </Fab>
    </Contenedor>
  )
}

const Contenedor = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

export default Social
