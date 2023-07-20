import NavBar from 'src/components/NavBar/NavBar'
import { Box } from '@mui/material'

const Home = () => {
  const styles = {
    Box: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'primary.main',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    Main: {
      height: '-webkit-fill-available',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      margin: '0 0.5rem 0.5rem',
      borderRadius: '1rem',
    },
  }

  return (
    <Box sx={styles.Box}>
      <NavBar />
      <Box sx={styles.Main}></Box>
    </Box>
  )
}

export default Home
