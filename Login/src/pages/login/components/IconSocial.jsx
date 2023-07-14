import { Fab } from '@mui/material'
import useScreenSize from '../../../hooks/useScreenSize'

const IconSocial = ({ Social }) => {
  const { width } = useScreenSize()

  return (
    <Fab
      size={width < 1024 ? 'small' : 'medium'}
      color="secondary.light"
      sx={{
        ':hover': { bgcolor: 'primary.main', color: 'white' },
      }}
    >
      <Social />
    </Fab>
  )
}

export default IconSocial
