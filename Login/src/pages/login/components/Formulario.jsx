import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useAuth } from '../../../context/userContext/authContext'
import React from 'react'
import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

const Formulario = ({ login, recovery, signin }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const { signUp } = useAuth()
  /* const navigate = Navigate() */

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (signin) {
      try {
        setError('')
        await signUp(user.email, user.password)
        /* navigate('/') */
      } catch (error) {
        if (error.code === 'auth/invalid-email') setError('Email incorrecto')
        console.log(error)
      }
    }
  }

  return (
    <Contenedor autoComplete="off" onSubmit={handleSubmit}>
      <Entradas>
        <TextField
          name="email"
          fullWidth
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        {(login || signin) && (
          <TextField
            name="password"
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
            onChange={handleChange}
          />
        )}
        {signin && (
          <TextField
            name="passwordRepeat"
            fullWidth
            type="password"
            label="Repita contraseña"
            variant="outlined"
          />
        )}
        {login && <Link to="/Recovery">¿Olvidaste tu contraseña?</Link>}
      </Entradas>
      <Acciones>
        {error && (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        <Button fullWidth variant="contained" color="primary" type="submit">
          {login && 'Entrar'}
          {recovery && 'Recuperar clave'}
          {signin && 'Registrar'}
        </Button>
        {login ? (
          <Link to="/SignIn">¿Todavía no te registraste? Vení</Link>
        ) : (
          <Link to="/Login">Volver</Link>
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
