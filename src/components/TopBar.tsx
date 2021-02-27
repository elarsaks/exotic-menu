import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { info } from './Color'

const TopBarDiv = styled('div')`
  display: flex;
  flex: 1;
  background: ${info};
  font-size: 3vh;
  height: 7vh;
`

const BarMenuLogo = styled('div')`
  float: 'left';
  margin: 10px;
`

const BarMenu = styled('div')<TopBarProps>`
  display: inline-flex;
  flex: 1;
  justify-content: ${(p) => (p.menuRight ? 'flex-end' : 'center')};
`

export interface MenuButtonProps {
  selected: boolean
}

const BarMenuButton = styled('div')`
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export interface TopBarProps {
  items: string[]
  menuRight: boolean
}

export const TopBar: FC<TopBarProps> = ({ items, menuRight }) => {
  return (
    <TopBarDiv>
      <BarMenuLogo>Logo</BarMenuLogo>
      <BarMenu menuRight={menuRight} items={items}>
        {items.map((item, i) => (
          <BarMenuButton key={i}>{item.toUpperCase()}</BarMenuButton>
        ))}
      </BarMenu>
    </TopBarDiv>
  )
}
