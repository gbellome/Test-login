import { Fab } from '@mui/material'
import useScreenSize from 'src/hooks/useScreenSize'

const IconSocial = ({ props: { Components, handleLogin } }) => {
  const { width } = useScreenSize()

  return (
    <Fab
      size={width < 1024 ? 'small' : 'medium'}
      color="secondary.light"
      sx={{
        ':hover': { bgcolor: 'primary.main', color: 'white' },
      }}
      onClick={handleLogin}
    >
      <Components />
    </Fab>
  )
}

export default IconSocial
