import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
  theme: {
    colors: {
      blue900: '#1e2330',
      blue800: '#242a39',
      blue700: '#30384d',
      blue600: '#1040d0',
      blue500: '#1a2f6f',
      blue400: '#37426a',
      gray: '#fafcfe'
    },
    fontSizes: {
      sm: '1.2rem',
      md: '1.6rem',
      lg: '2rem'
    },
    space: {
      xs: '1rem',
      sm: '1.2rem',
      md: '1.6rem',
      lg: '1.8rem'
    },
    radii: {
      rounded: '.5rem'
    }
  }
})
