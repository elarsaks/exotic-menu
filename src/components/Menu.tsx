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
  //list-style: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const MenuItemsWrapper = styled('div')`
  background: green;
  position: absolute;
  font-size: 1em;
  width: 26em;
  height: 26em;
  left: 50%;
  margin-left: -13em;
  bottom: -50%;
  bottom: -13em;
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
}

export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <MenuWrapper>
      <MainButton>.</MainButton>
      <MenuItemsWrapper>
        {items.map((item, i) => (
          <Link item={item} itemIndex={i} key={i}>
            <Article>{item}</Article>
          </Link>
        ))}
      </MenuItemsWrapper>
    </MenuWrapper>
  )
}
