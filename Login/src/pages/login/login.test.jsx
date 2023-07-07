import styled from '@emotion/styled'
import ImagenFondo from './../../assets/images/ImagenFondo.jpg'
import Logo from './components/Logo'
import Social from './components/Social'
import Forms from './components/Forms'

const Login = ({ login, recovery, signin }) => {
  return (
    <Fondo>
      <Contenedor>
        <Logo />
        <Formulario>
          {login && (
            <>
              <Social />
              <Divisor />
            </>
          )}
          <Forms login={login} recovery={recovery} signin={signin} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  min-width: 400px;
  min-height: 600px;
  gap: 5rem;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  gap: 4rem;
  padding: 2rem;
  height: 100%;
`

const Divisor = styled.div`
  width: 90%;
  height: 2px;
  background: #ddd;
  text-align: center;
  line-height: 0.14rem;
`

export default Login
