import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'

/// This needs to be set for everything!
const MenuWrapper = styled('div')`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  margin: 0;
  padding: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`

const MainButton = styled('div')`
  font-size: 1em;
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
  background-color: rgba(0, 68, 68, 0.9);
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;

  & > p {
    margin-block-start: 0.7em;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

interface MenuItemsWrapperProps {
  touchScreen: boolean
}

const openCloseMenu = (props: MenuItemsWrapperProps) => {
  // Menu open close on regular pc (not a touchscreen)
  if (!props.touchScreen) {
    return `font-size: 0em;
    ${MainButton}:hover ~ & {
      font-size: 0.6em;
    }
    :hover {
      font-size: 0.6em;
    }
    `
  } else {
    return `font-size: 0em;
    ${MainButton}:hover ~ & {
      font-size: 0.6em;
    }
    @media (max-width: 768px) {
      ${MainButton}:hover ~ & {
        font-size: 0.5em;
      }
    }
    `
  }
}

const MenuItemsWrapper = styled('div')<MenuItemsWrapperProps>`
  ${openCloseMenu}
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

  // TODO: Mobile screens
  //@media (max-width: 767px) {}
`

export interface MenuProps {
  /**
   * * Returns a route value (item.route) of an clicked item.
   * * __Use this to connect your routing.__
   */
  handleRouting: (route: string) => string
  /**
   * * Take an array of menu items. __Array length has to be 5, as there are 5 buttons in menu.__
   * * Name property is the value that will be displayed on the menu.
   * * Route property is the value that will be returned from the menu when user clicks on it.
   * * Icon propery takes an SVG icon that will be then displayed on menu. In this example material-ui icons are used
   */
  items: [
    {
      name: string
      route: string
      icon: object // TODO: icon could have a better type
    }
  ]
}

export const Menu: FC<MenuProps> = ({ items, handleRouting }) => {
  const [hover, setHover] = useState('MENU')
  const [selected, setSelected] = useState('About')
  const [touchScreen, setTouchScreen] = useState(
    'ontouchstart' in document.documentElement
  )

  const routeHandler = (name: string, route: string) => {
    setSelected(name)
    handleRouting(route)
  }

  return (
    <MenuWrapper>
      <MainButton>
        <p>{hover}</p>
      </MainButton>

      <MenuItemsWrapper touchScreen={touchScreen}>
        {items.map((item, i) => (
          <Link
            itemIndex={i}
            key={item.name}
            selected={item.name == selected}
            {...item}
            handleHover={setHover}
            handleClick={() => routeHandler(item.name, item.route)}
          />
        ))}
      </MenuItemsWrapper>
    </MenuWrapper>
  )
}
