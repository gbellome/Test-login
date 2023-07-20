import styled from '@emotion/styled'
import { Google, Facebook, Twitter, LinkedIn } from '@mui/icons-material'
import IconSocial from '../components/IconSocial'
import { useAuth } from 'src/context/authContext'
import { useNavigate } from 'react-router-dom'

const Social = () => {
  /* const socialList = [Google, Facebook, Twitter, LinkedIn] */
  const { loginWithGoogle, loginWithFacebook } = useAuth()
  const Navegar = useNavigate()

  const socialList = [
    {
      name: 'Google',
      Components: Google,
      handleLogin: async () => {
        await loginWithGoogle()
        Navegar('/Home')
      },
    },
    {
      name: 'Facebook',
      Components: Facebook,
      handleLogin: async () => {
        await loginWithFacebook()
        Navegar('/Home')
      },
    },
    {
      name: 'Twitter',
      Components: Twitter,
      handleLogin: async () => {
        Navegar('/Home')
      },
    },
    {
      name: 'LinkedIn',
      Components: LinkedIn,
      handleLogin: async () => {
        Navegar('/Home')
      },
    },
  ]

  return (
    <Contenedor>
      {socialList.map((socialIcon, index) => (
        <IconSocial props={socialIcon} key={index} />
      ))}
    </Contenedor>
  )
}

const Contenedor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export default Social
