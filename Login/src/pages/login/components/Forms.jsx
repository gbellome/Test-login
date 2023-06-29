import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import React from 'react'

const Forms = ({ login }) => {
  return (
    <>
      <Entradas>
        <TextField fullWidth label="Usuario o email" variant="outlined" />
        {login && (
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
          />
        )}
      </Entradas>
      <Acciones>
        <Button fullWidth variant="contained" color="primary">
          {login ? 'Entrar' : 'Recuperar clave'}
        </Button>
        <Link href="#">{login ? '¿Olvidaste tu contraseña?' : 'Volver'}</Link>
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
