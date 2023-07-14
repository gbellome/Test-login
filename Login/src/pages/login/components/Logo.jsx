import styled from '@emotion/styled'
import LogotipoDeal from 'src/assets/images/LogotipoDeal.png'

const Logo = () => {
  return <Logotipo />
}

const Logotipo = styled.div`
  background: url(${LogotipoDeal});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100px;
  width: 30%;
`
export default Logo
