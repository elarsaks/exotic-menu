import React, { FC } from 'react'
import styled from '@emotion/styled'

export type Kind = 'error' | 'info' | 'success' | 'warning'
export type KindMap = Record<Kind, string>

const kinds: KindMap = {
  error: 'rgb(172, 8, 49)',
  info: 'rgb(8, 19, 177)',
  success: 'rgb(4, 126, 65)',
  warning: 'rgb(211, 190, 0)',
}

export interface AlertProps {
  kind: 'error' | 'info' | 'success' | 'warning'
}

const getKind = ({ kind = 'info' }: AlertProps) => kinds[kind]
const AlertStyled = styled('div')<AlertProps>`
  background: ${getKind};
  padding: 20px;
  margin: 10px;
  color: white;
  border-radius: 3px;
  //border: 2px solid ${getKind};
`

export const Alert: FC<AlertProps> = ({ children, kind, ...rest }) => (
  <AlertStyled kind={kind} {...rest}>
    {children}
  </AlertStyled>
)
