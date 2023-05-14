import { styled } from '@/config'

export const Wrapper = styled('section', {
  margin: '0 1rem',
  backgroundColor: '$blue800',
  width: '30%',
  minHeight: '70vh',
  borderRadius: '.5rem',
  border: '1px solid $blue700',
  padding: '0 $md',
  maxHeight: '500px',
  overflowY: 'scroll',
  position: 'relative'
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
  height: '50px',
  top: 0,
  backgroundColor: '$blue800'
})

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export const Title = styled('h3', {
  color: '$gray',
  textTransform: 'capitalize',
  fontSize: '1.6rem'
})

export const TotalCards = styled('p', {
  padding: '0.2rem .5rem',
  borderRadius: '$rounded',
  backgroundColor: '$blue400',
  marginLeft: '$xs',
  color: '$gray'
})

export const AddButton = styled('button', {
  border: 0,
  background: 'transparent',
  cursor: 'pointer',

  img: {
    width: '1.6rem'
  }
})
