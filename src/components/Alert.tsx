import React, { FC } from 'react'
import styled from '@emotion/styled'
import { error, info, success, warning } from './Color.tsx'

export type Kind = 'error' | 'info' | 'success' | 'warning'
export type KindMap = Record<Kind, string>

const kinds: KindMap = {
  error: error,
  info: info,
  success: success,
  warning: warning,
}

const setTranparency = (color: string, transparent: boolean) => {
  return `
    background: ${transparent ? 'none' : color};
    box-shadow: inset 0 0 0 1px ${color};
    border: 2px, solid, ${color};
    color: ${transparent ? color : '#fff'};
  `
}

export interface AlertProps {
  transparent: boolean
  kind: 'error' | 'info' | 'success' | 'warning'
}

const getKind = ({ kind = 'info', transparent = false }: AlertProps) =>
  setTranparency(kinds[kind], transparent)

const AlertStyled = styled('div')<AlertProps>`
  ${getKind};
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid ${getKind};
  //color: red;
`

export const Alert: FC<AlertProps> = ({ children, kind, ...rest }) => (
  <AlertStyled kind={kind} {...rest}>
    {children}
  </AlertStyled>
)
