import styled from '@emotion/styled'
import ImagenFondo from './../../assets/images/ImagenFondo.jpg'
import Logo from './components/Logo'
import Social from './components/Social'
import Forms from './components/Forms'

const Login = () => {
  return (
    <Fondo>
      <Contenedor>
        <Logo />
        <Formulario>
          <Social />
          <Divisor />
          <Forms />
        </Formulario>
      </Contenedor>
    </Fondo>
  )
}

const Fondo = styled.div`
  background: url(${ImagenFondo}) rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-blend-mode: multiply;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contenedor = styled.div`
  background-color: #f6f6f6;
  width: 600px;
  height: 800px;
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  border-radius: 20px;
`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 75px;
  width: 100%;
  height: 100%;
`

const Divisor = styled.div`
  width: 100%;
  height: 2px;
  background: #ddd;
  text-align: center;
  line-height: 0.14rem;
`

export default Login
