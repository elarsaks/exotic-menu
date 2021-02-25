import React, { FC } from 'react'
import styled from '@emotion/styled'

export type Kind = 'error' | 'info' | 'success' | 'warning'
export type KindMap = Record<Kind, string>

const kinds: KindMap = {
  error: 'rgb(172, 8, 49)',
  info: 'rgb(8, 19, 177)',
  success: 'rgb(4, 126, 65)',
  warning: 'rgb(211, 162, 0)',
}

const setOpacity = (color: string, transparent: boolean) => {
  const rgba = color.slice(0, 3) + 'a' + color.slice(3)
  const opacity = rgba.slice(0, -1) + ', 0.25)'

  return `
    background: ${transparent ? opacity : color};
    box-shadow: inset 0 0 0 1px ${color};
    border: 2px, solid, ${color}
  `
}

export interface AlertProps {
  transparent: boolean
  kind: 'error' | 'info' | 'success' | 'warning'
}

const getKind = ({ kind = 'info', transparent = false }: AlertProps) =>
  setOpacity(kinds[kind], transparent)

const AlertStyled = styled('div')<AlertProps>`
  ${getKind};
  padding: 20px;
  margin: 10px;
  color: white;
  border-radius: 5px;
  border: 2px solid ${getKind};
`

export const Alert: FC<AlertProps> = ({ children, kind, ...rest }) => (
  <AlertStyled kind={kind} {...rest}>
    {children}
  </AlertStyled>
)
