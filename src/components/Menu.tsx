import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'
import { MainButton } from './MainButton'

/// This needs to be set for everything!
const MenuWrapper = styled('div')`
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`

const MenuItemsWrapper = styled('div')`
  font-size: 0.7em; // Menu size can be controlled from here!
  position: absolute;
  width: 26em;
  height: 26em;
  left: 50%;
  margin-left: -13em;
  bottom: -50%;
  bottom: -13em;
  border-radius: 50%;
  transition: all 0.3s ease 0.3s;
  transform: scale(1); // Menu size can be controlled from here!
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
`

const Article = styled('a')``

export interface MenuProps {
  items: string[]
}

export const Menu: FC<MenuProps> = ({ items }) => {
  let [open, setOpen] = useState(false)
  const openClose = () => setOpen(!open)

  return (
    <MenuWrapper>
      <MainButton openClose={openClose} />
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
