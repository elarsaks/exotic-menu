import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

const Button = styled('div')`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 21;
  margin-top: -2.25em;
  margin-left: -2.25em;
  padding-top: 0em;
  width: 4.5em;
  height: 4.5em;
  border: none;
  border-radius: 50%;
  background: none;
  background-color: rgb(0, 26, 88);
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  backface-visibility: hidden;
  cursor: pointer;

  & > div {
    margin-top: 0.7em;
  }
`

interface MainButtonProps {
  openClose: () => void
}

export const MainButton: FC<MainButtonProps> = ({ openClose }) => {
  return (
    <Button onClick={() => openClose()}>
      <div>Menu</div>
    </Button>
  )
}
