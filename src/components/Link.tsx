import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

export interface LinkComponentProps {
  itemAngle: string
  itemPosition: {
    x: string
    y: string
  }
}
const LinkComponent = styled('li')<LinkComponentProps>`
  position: absolute;
  background: blue;
  font-size: 1.5em;
  width: 10em;
  height: 10em;
  margin-top: ${(p) => p.itemPosition.y};
  margin-left: ${(p) => p.itemPosition.x};
  border: 2px solid white;
  transform: rotate(${(p) => p.itemAngle}) skew(50deg);
`

const Article = styled('a')`
  color: white;
`

export interface LinkProps {
  item: string
  itemIndex: number
}

export const Link: FC<LinkProps> = ({ item, itemIndex }) => {
  const itemAngles: string[] = ['-10deg', '30deg', '70deg', '110deg', '150deg']
  const itemPositions = [
    { x: '-8.2em', y: '0.55em' },
    { x: '-3.4em', y: '-6.3em' },
    { x: '4.55em', y: '-8.5em' },
    { x: '12.15em', y: '-5.1em' },
    { x: '15.6em', y: '2.5em' },
  ]

  console.log(itemPositions[itemIndex])
  return (
    <LinkComponent
      itemAngle={itemAngles[itemIndex]}
      itemPosition={itemPositions[itemIndex]}
    >
      <Article>{item}</Article>
    </LinkComponent>
  )
}
