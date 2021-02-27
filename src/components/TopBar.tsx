import React, { FC } from 'react'
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

const BarMenuButton = styled('div')`
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    font-size: 3.5vh;
  }
`

export interface TopBarProps {
  items: string[]
  menuRight: boolean
}

export const TopBar: FC<TopBarProps> = ({ items, menuRight }) => {
  const selectButton = (Event: any) => {
    console.log('Received a click')
    Event.currentTarget.classList.toggle('selected')
  }

  return (
    <TopBarDiv>
      <BarMenuLogo>Logo</BarMenuLogo>
      <BarMenu menuRight={menuRight} items={items}>
        {items.map((item, i) => (
          <BarMenuButton onClick={selectButton} key={i}>
            {item.toUpperCase()}
          </BarMenuButton>
        ))}
      </BarMenu>
    </TopBarDiv>
  )
}
