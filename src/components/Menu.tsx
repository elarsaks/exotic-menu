import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'

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

const MainButton = styled('div')`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 21;
  margin-top: -2.25em;
  margin-left: -2.75em;
  padding-top: 0em;
  width: 5.5em;
  height: 4.5em;
  border: none;
  border-radius: 50%;
  background-color: rgba(19, 19, 19, 0.863);
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;

  & > p {
    margin-block-start: 0.7em;
  }
`

const MenuItemsWrapper = styled('div')`
  font-size: 0em; // Menu size can be controlled from here!
  position: absolute;
  width: 26em;
  height: 26em;
  left: 50%;
  margin-left: -13em;
  bottom: -50%;
  bottom: -13em;
  border-radius: 50%;
  transition: font-size 0.1s 0.1s;
  transform: scale(1);
  pointer-events: none;
  overflow: hidden;
  z-index: 13;

  ${MainButton}:hover ~ & {
    font-size: 0.6em;
  }

  :hover {
    font-size: 0.6em;
  }
`
export interface Item {
  name: string
  value: string
  icon: any
}

export interface MenuProps {
  items: [Item, Item, Item, Item, Item]
}

export const Menu: FC<MenuProps> = ({ items }) => {
  const [hover, setHover] = useState('MENU')

  const [selected, setSelected] = useState('About')

  return (
    <MenuWrapper>
      <MainButton>
        <p>{hover}</p>
      </MainButton>
      <MenuItemsWrapper>
        {items.map((item, i) => (
          <Link
            itemIndex={i}
            key={item.name}
            selected={item.name == selected}
            {...item}
            handleHover={setHover}
            setSelected={setSelected}
          />
        ))}
      </MenuItemsWrapper>
    </MenuWrapper>
  )
}
