import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import React from 'react'

const Forms = () => {
  return (
    <Form>
      <Entradas>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Usuario o email"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          type="password"
          label="Contraseña"
          variant="outlined"
        />
      </Entradas>
      <Acciones>
        <Button fullWidth variant="contained" color="primary">
          Entrar
        </Button>
        <Link href="#">¿Olvidaste tu contraseña?</Link>
      </Acciones>
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 10px;
  gap: 5rem;
`

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 2rem;
  width: 100%;
`

const Acciones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
  width: 100%;
`

export default Forms
