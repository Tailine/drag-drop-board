import { HTMLAttributes, RefObject } from 'react'
import * as S from './Card.styles'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element
  ref?: RefObject<HTMLDivElement>
}

export function Card({ children, ...props }: Props) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}
