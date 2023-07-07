import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import React from 'react'

const Forms = ({ login, recovery, signin }) => {
  return (
    <>
      <Entradas>
        <TextField fullWidth label="Usuario o email" variant="outlined" />
        {(login || signin) && (
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
          />
        )}
        {signin && (
          <TextField
            fullWidth
            type="password"
            label="Repita contraseña"
            variant="outlined"
          />
        )}
        {login && <a href="#">¿Olvidaste tu contraseña?</a>}
      </Entradas>
      <Acciones>
        <Button fullWidth variant="contained" color="primary">
          {login && 'Entrar'}
          {recovery && 'Recuperar clave'}
          {signin && 'Registrar'}
        </Button>
        <a href="#">{login ? '¿Todavía no te registraste? Vení' : 'Volver'}</a>
      </Acciones>
    </>
  )
}

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
`

const Acciones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export default Forms
