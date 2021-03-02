import React, { FC } from 'react'
import styled from '@emotion/styled'

// Make those editable by props
const Blue: string = 'rgba(11, 131, 230, 0.575)'
const Teal: string = 'rgba(11, 230, 219, 0.575)'
const Orange: string = 'rgb(255, 166, 0)'
const Red: string = 'rgba(255, 60, 0, 0.911)'
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
  background: ${(p) => (p.selected ? Teal : Blue)};
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

  &:hover {
    background: ${(p) => (p.selected ? Teal : Orange)};
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
  handleHover(name: string): void
  icon: any
  itemIndex: number
  name: string
  selected: boolean
  setSelected: (name: string) => void
  value: string
}

export const Link: FC<LinkProps> = ({
  handleHover,
  icon,
  itemIndex,
  name,
  selected,
  setSelected,
}) => {
  const itemAngles: string[] = ['-10deg', '30deg', '70deg', '110deg', '150deg']
  const itemPositions = [
    { x: '-8em', y: '0.72em' },
    { x: '-3.4em', y: '-6.19em' },
    { x: '4.55em', y: '-8.53em' },
    { x: '12.15em', y: '-5.21em' },
    { x: '15.8em', y: '2.25em' },
  ]

  //  Custom components need to start with a capital letter, because DOM native elements start with lowercase letters.
  const Icon = icon
  return (
    <LinkComponent
      itemAngle={itemAngles[itemIndex]}
      itemPosition={itemPositions[itemIndex]}
      selected={selected}
      onMouseOver={() => handleHover(name)}
      onMouseLeave={() => handleHover('MENU')}
      onClick={() => setSelected(name)}
    >
      <IconWrapper>
        <Icon fontSize='large' />
      </IconWrapper>
    </LinkComponent>
  )
}
