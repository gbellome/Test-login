import styled from '@emotion/styled'
import { Google, Facebook, Twitter, LinkedIn } from '@mui/icons-material'
import IconSocial from '../components/IconSocial'

const Social = () => {
  const socialList = [Google, Facebook, Twitter, LinkedIn]

  return (
    <Contenedor>
      {socialList.map((socialIcon, index) => (
        <IconSocial Social={socialIcon} key={index} />
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
