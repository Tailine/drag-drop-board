import { styled } from '@/config'

export const Actions = styled('div', {
  display: 'flex'
})

export const Button = styled('button', {
  border: 0,
  padding: '.3rem',
  backgroundColor: '$gray600',
  borderRadius: '$rounded',
  display: 'flex',
  alignItems: 'center',
  color: '$gray400',
  cursor: 'pointer',
  marginLeft: '$xs',
  svg: {
    display: 'flex'
  },

  '&:hover': {
    backgroundColor: '$gray900'
  }
})

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$gray400',
  [`& ${Button}`]: {
    display: 'none'
  },

  '&:hover': {
    [`& ${Button}`]: {
      display: 'block'
    }
  }
})

export const Paragraph = styled('p', {
  color: '$gray400',
  fontSize: '$md'
})
