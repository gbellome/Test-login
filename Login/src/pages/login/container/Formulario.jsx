import { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { TextField, Button, Alert } from '@mui/material'
import { useAuth } from 'src/context/authContext'
import Password from 'src/components/Inputs/Password'

const Formulario = () => {
  // Importo funciones útiles
  const Navegar = useNavigate()
  const { pathname } = useLocation()
  const { signUp, signIn } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // UseStates
  const [error, setError] = useState(false)
  const [textButton, setTextButton] = useState()

  // UseEffects
  useEffect(() => {
    switch (pathname) {
      case '/SignIn':
        setTextButton('Entrar')
        break
      case '/SignUp':
        setTextButton('Registrar')
        break
      case '/Recovery':
        setTextButton('Recuperar clave')
        break
    }
  })

  // Handles
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
    console.log(user)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      pathname === '/SignUp' && (await signUp(user.email, user.password))
      pathname === '/SignIn' && (await signIn(user.email, user.password))

      Navegar('/Home')
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Email incorrecto')
        case 'auth/user-not-found':
          setError('No estás registrado')
        case 'auth/wrong-password':
        case 'auth/missing-password':
          setError('Contraseña incorrecta')
        case 'auth/weak-password':
          setError('6 caracteres mínimo')
      }
    }
  }

  return (
    <Contenedor autoComplete="off" onSubmit={handleSubmit}>
      <Entradas>
        <TextField
          name="email"
          id="email"
          fullWidth
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        {pathname === '/SignIn' && (
          <>
            <Password caption={'Contraseña'} onChange={handleChange} />
            <Link to="/Recovery">¿Olvidaste tu contraseña?</Link>
          </>
        )}
        {pathname === '/SignUp' && (
          <>
            <Password
              caption={'Contraseña'}
              value={user.password}
              onChange={handleChange}
              indicator
            />
            {/* <Password caption={'Repetir contraseña'} /> */}
          </>
        )}
      </Entradas>
      <Acciones>
        {error && (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        <Button fullWidth variant="contained" color="primary" type="submit">
          {textButton}
        </Button>
        {pathname === '/SignIn' ? (
          <Link to="/SignUp">¿Todavía no te registraste? Vení</Link>
        ) : (
          <Link to="/SignIn">Volver</Link>
        )}
      </Acciones>
    </Contenedor>
  )
}

const Contenedor = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 4rem;
`

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`

const Acciones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`
export default Formulario
