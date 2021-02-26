import React, { FC } from 'react'
import styled from '@emotion/styled'

export const error = 'rgb(172, 8, 49)'
export const info = 'rgb(5, 77, 218)'
export const success = 'rgb(4, 126, 65)'
export const warning = 'rgb(211, 162, 0)'

export interface ColorExampleProps {
  color: string
}

const Example = styled('div')<ColorExampleProps>`
  height: 200px;
  width: 100px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`

export const ColorExample: FC<ColorExampleProps> = ({ color }) => (
  <Example color={color} />
)
