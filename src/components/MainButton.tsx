import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

const Button = styled('button')`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 11;
  margin-top: -2.25em;
  margin-left: -2.25em;
  padding-top: 0;
  width: 4.5em;
  height: 4.5em;
  border: none;
  border-radius: 50%;
  background: none;
  background-color: rgba(0, 0, 0, 0.37);
  color: #0a0a0a;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;
  backface-visibility: hidden;
`

export const MainButton: FC = () => {
  return <Button>+</Button>
}
