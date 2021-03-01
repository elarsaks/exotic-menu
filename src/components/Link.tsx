import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import Icon from '@material-ui/core/Icon'

export interface LinkComponentProps {
  itemAngle: string
  itemPosition: {
    x: string
    y: string
  }
}

const LinkComponent = styled('div')<LinkComponentProps>`
  position: absolute;
  background: rgba(11, 131, 230, 0.575);
  font-size: 1.5em;
  width: 10em;
  height: 10em;
  z-index: 99;
  pointer-events: all;
  overflow: hidden;

  margin-top: ${(p) => p.itemPosition.y};
  margin-left: ${(p) => p.itemPosition.x};
  transform: rotate(${(p) => p.itemAngle}) skew(50deg);

  &:hover {
    background: rgba(190, 230, 11, 0.575);
    cursor: pointer;
  }
`

const IconWrapper = styled('a')`
  display: block;
  font-size: 1.18em;
  height: 13.5em;
  width: 13.5em;
  position: absolute;
  bottom: -7.25em;
  right: -7.25em;
  border-radius: 50%;
  text-decoration: none;
  color: #fff;
  padding-top: 1em;
  text-align: center;

  transform: skew(-50deg) rotate(-70deg) scale(1);
  transition: opacity 0.3s, color 0.3s;
`

export interface LinkProps {
  icon: any
  name: string
  value: string
  itemIndex: number
}

export const Link: FC<LinkProps> = ({ itemIndex, icon }) => {
  const itemAngles: string[] = ['-10deg', '30deg', '70deg', '110deg', '150deg']
  const itemPositions = [
    { x: '-8em', y: '0.72em' },
    { x: '-3.4em', y: '-6.19em' },
    { x: '4.55em', y: '-8.53em' },
    { x: '12.15em', y: '-5.21em' },
    { x: '15.8em', y: '2.25em' },
  ]
  //  Custom components need to start with a capital letter,
  //  because DOM native elements start with lowercase letters.
  const Icon = icon
  return (
    <LinkComponent
      itemAngle={itemAngles[itemIndex]}
      itemPosition={itemPositions[itemIndex]}
    >
      <IconWrapper>
        <Icon fontSize='large' />
      </IconWrapper>
    </LinkComponent>
  )
}
