import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

/// This needs to be set for everything!
const MenuWrapper = styled('div')`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  width: 100%auto;
`

const MainButton = styled('button')`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 11;
  margin-top: -2.25em;
  margin-left: -2.25em;
  padding-top: 0em;
  width: 4.5em;
  height: 4.5em;
  border: none;
  border-radius: 50%;
  background: none;
  background-color: rgba(17, 242, 250, 0.37);
  color: #52be7f;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;
  backface-visibility: hidden;
`
const MenuItemsWrapper = styled('div')`
  background: green;
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
  //overflow: hidden;
`

const Link = styled('li')`
  background: blue;
  width: 50%;
  height: 50%;
  border: 2px solid white;

  li:first {
    transform: rotate(-10deg) skew(50deg);
  }

  li:nth-child() {
    transform: rotate(30deg) skew(50deg);
  }
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
          <Link>
            <Article>{item}</Article>
          </Link>
        ))}
      </MenuItemsWrapper>
      <div id='cn-overlay' className='cn-overlay'></div>
    </MenuWrapper>
  )
}
