import styled from '@emotion/styled'
import Fab from '@mui/material/Fab'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Social = () => {
  return (
    <Contenedor>
      <Fab color="secondary.light">
        <GoogleIcon />
      </Fab>
      <Fab color="secondary.light">
        <FacebookIcon />
      </Fab>
      <Fab color="secondary.light">
        <TwitterIcon />
      </Fab>
      <Fab color="secondary.light">
        <LinkedInIcon />
      </Fab>
    </Contenedor>
  )
}

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export default Social
