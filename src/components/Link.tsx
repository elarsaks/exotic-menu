import React, { FC } from 'react'
import styled from '@emotion/styled'

const color = {
  aqua: 'rgba(0, 255, 255, 0.7)',
  maroon: 'rgba(128, 0, 0, 0.7)',
  red: 'rgba(255, 0, 0, 0.7)',
  teal: 'rgba(0, 128, 128, 0.7)',
}
export interface LinkComponentProps {
  selected: boolean
  itemAngle: string
  itemPosition: {
    x: string
    y: string
  }
}

const LinkComponent = styled('div')<LinkComponentProps>`
  position: absolute;
  background: ${(p) => (p.selected ? color.maroon : color.teal)};
  font-size: 1.5em;
  width: 10em;
  height: 10em;
  z-index: 99;
  pointer-events: all;
  overflow: hidden;
  cursor: pointer;
  z-index: 11;

  margin-top: ${(p) => p.itemPosition.y};
  margin-left: ${(p) => p.itemPosition.x};
  transform: rotate(${(p) => p.itemAngle}) skew(50deg);
  transition: font-size 0s, background 0.5s;

  &:hover {
    background: ${(p) => (p.selected ? color.red : color.aqua)};
    transition: ${(p) => (p.selected ? 'background 0s' : 'background 0.3s')};
  }

  :active {
    // TODO: Click effect on a button
    // margin-top: -8em;
  }
`

const IconWrapper = styled('a')`
  display: block;
  font-size: 1.18em;
  height: 13.5em;
  width: 13.5em;
  bottom: -7.25em;
  right: -7.25em;
  border-radius: 50%;
  text-decoration: none;
  color: #fff;
  padding-top: 1em;
  text-align: center;
  transform: skew(-50deg) rotate(-70deg) scale(1);
  position: absolute;
  z-index: 1;
`

export interface LinkProps {
  handleClick: () => void
  handleHover(name: string): void
  icon: any
  itemIndex: number
  name: string
  selected: boolean
}

export const Link: FC<LinkProps> = ({
  handleClick,
  handleHover,
  icon,
  itemIndex,
  name,
  selected,
}) => {
  const itemAngles: string[] = ['-10deg', '30deg', '70deg', '110deg', '150deg']
  const itemPositions = [
    { x: '-8em', y: '0.72em' },
    { x: '-3.4em', y: '-6.19em' },
    { x: '4.65em', y: '-8.4em' },
    { x: '12.15em', y: '-4.9em' },
    { x: '15.8em', y: '2.55em' },
  ]
  const Icon = icon

  return (
    <LinkComponent
      itemAngle={itemAngles[itemIndex]}
      itemPosition={itemPositions[itemIndex]}
      selected={selected}
      onMouseOver={() => handleHover(name)}
      onMouseLeave={() => handleHover('MENU')}
      onClick={() => handleClick()}
    >
      <IconWrapper>
        <Icon
          style={
            itemIndex == 4 ? { marginLeft: '-0.5em' } : { marginLeft: '0' }
          }
          fontSize='large'
        />
      </IconWrapper>
    </LinkComponent>
  )
}
