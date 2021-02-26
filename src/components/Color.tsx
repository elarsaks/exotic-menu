import React, { FC } from 'react'
import styled from '@emotion/styled'

export const error = 'rgb(221, 17, 37)'
export const info = 'rgb(5, 77, 218)'
export const success = 'rgb(4, 126, 65)'
export const warning = 'rgb(236, 232, 1)'

export interface ColorExampleProps {
  color: 'error' | 'info' | 'success' | 'warning'
}

const Example = styled('div')<ColorExampleProps>`
  display: inline-flex;
  background: ${(p) => p.color};
  height: 200px;
  width: 200px;
  margin: 10px;
  border-radius: 15px;
`

export const ColorExample: FC<ColorExampleProps> = ({ color }) => (
  <Example color={color} />
)
