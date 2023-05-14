import { styled } from '@/config'

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column'
})

export const Textarea = styled('textarea', {
  resize: 'none',
  background: 'transparent',
  borderRadius: '$rounded',
  border: '1px solid $blue700',
  padding: '.3rem',
  color: '$gray',
  fontSize: '$md',
  paddingLeft: '$xs',
  // '&:focus': {
  //   outline: '1px solid $blue500'
  // },
  '&::placeholder': {
    color: '$gray'
  }
})

export const Button = styled('button', {
  padding: '.3rem $xs',
  color: '$gray',
  cursor: 'pointer',
  borderRadius: '$rounded'
})

export const CancelButton = styled(Button, {
  border: '1px solid $blue700',
  background: 'transparent',
  marginRight: '$xs'
})

export const SubmitButton = styled(Button, {
  backgroundColor: '$blue600',
  border: 0
})

export const ControlsArea = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '$sm'
})
