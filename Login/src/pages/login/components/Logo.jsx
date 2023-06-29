import styled from '@emotion/styled'
import React from 'react'

import LogotipoDeal from './../../../assets/images/LogotipoDeal.png'

const Logo = () => {
  return <Logotipo />
}

const Logotipo = styled.div`
  background: url(${LogotipoDeal});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 200px;
  height: 100px;
`
export default Logo
