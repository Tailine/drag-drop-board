import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
  theme: {
    colors: {
      gray900: '#15171e',
      gray800: '#222530',
      gray700: '#222530',
      gray600: '#3a3f51',
      blue: '#1a4a9e',
      orange: '#ff5d44',
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
