import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

const LinkComponent = styled('li')`
  position: absolute;
  background: blue;
  width: 50%;
  height: 50%;
  border: 2px solid white;
  transform: rotate(-10deg) skew(50deg);

  li:first {
    transform: rotate(-10deg) skew(50deg);
  }

  li:nth-child() {
    transform: rotate(30deg) skew(50deg);
  }
`

const Article = styled('a')``

export interface MenuProps {
  item: string
}

export const Link: FC<MenuProps> = ({ item }) => {
  return (
    <LinkComponent>
      <Article>{item}</Article>
    </LinkComponent>
  )
}
