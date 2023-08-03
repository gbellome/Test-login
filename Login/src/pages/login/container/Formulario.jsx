import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { TextField, Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useAuth } from 'src/context/authContext'
import Password from 'src/components/Inputs/Password'
import { LIST_ERRORS_FIREBASE } from 'src/config/firebase.errors'

const Formulario = ({ pathname }) => {
  // Importo funciones útiles
  const Navegar = useNavigate()
  const { signUp, signIn, resetPassword } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // UseStates
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // Handles
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      pathname === '/Registrar' && (await signUp(user.email, user.password))
      pathname === '/IngresarSignIn' &&
        (await signIn(user.email, user.password))
      if (pathname === '/RecuperarClave') {
        await resetPassword(user.email)
        return
      }

      Navegar('/Inicio')
    } catch (error) {
      setLoading(false)
      setError(
        LIST_ERRORS_FIREBASE[error.code] || LIST_ERRORS_FIREBASE['default']
      )
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
        {pathname === '/Ingresar' && (
          <>
            <Password caption={'Contraseña'} onChange={handleChange} />
            <Link to="/RecuperarClave">¿Olvidaste tu contraseña?</Link>
          </>
        )}
        {pathname === '/Registrar' && (
          <Password
            caption={'Contraseña'}
            value={user.password}
            onChange={handleChange}
            indicator
          />
        )}
      </Entradas>
      <Acciones>
        {error && (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        <LoadingButton
          loading={loading}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          {pathname === '/Ingresar' && 'Entrar'}
          {pathname === '/Registrar' && 'Registrar'}
          {pathname === '/RecuperarClave' && 'Recuperar'}
        </LoadingButton>
        {pathname === '/Ingresar' ? (
          <Link to="/Registrar">¿Todavía no te registraste? Vení</Link>
        ) : (
          <Link to="/Ingresar">Volver</Link>
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
