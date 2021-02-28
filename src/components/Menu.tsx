import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'
import { MainButton } from './MainButton'

/// This needs to be set for everything!
const MenuWrapper = styled('div')`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  width: 100%;
`

const MenuItemsWrapper = styled('div')`
  //background: green;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 10;
  margin-top: -13em;
  margin-left: -13.5em;
  width: 27em;
  height: 27em;
  border-radius: 50%;
  // background: transparent;
  opacity: 1;
  transition: all 0.3s ease 0.3s;
  transform: scale(1);
  pointer-events: none;
  overflow: hidden;
`

const Article = styled('a')``

export interface MenuProps {
  items: string[]
  menuRight: boolean
}

export const Menu: FC<MenuProps> = ({ items, menuRight }) => {
  return (
    <MenuWrapper>
      <MainButton>+</MainButton>
      <MenuItemsWrapper>
        {items.map((item) => (
          <Link item={item}>
            <Article>{item}</Article>
          </Link>
        ))}
      </MenuItemsWrapper>
      <div id='cn-overlay' className='cn-overlay'></div>
    </MenuWrapper>
  )
}
