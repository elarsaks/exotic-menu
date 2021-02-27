import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

const MenuDiv = styled('div')`
  display: flex;
  flex: 1;
  background: green;
  font-size: 3vh;
  height: 7vh;
`

export interface MenuProps {
  items: string[]
  menuRight: boolean
}

export const Menu: FC<MenuProps> = ({ items, menuRight }) => {
  return <MenuDiv>Test</MenuDiv>
}
