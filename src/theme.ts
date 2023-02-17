import type { PUITheme } from '@panenco/ui'

export const theme: PUITheme = {
  colors: {
    alert:      '#424242',
    error:      '#424242',
    success:    '#424242',
    primary200: '#424242',
    primary500: '#424242',
    primary700: '#424242',
    primary900: '#424242',
    base100:    '#424242',
    base200:    '#424242',
    base300:    '#424242',
    base400:    '#424242',
    base500:    '#424242',
    base600:    '#424242',
    base700:    '#424242',
    base800:    '#424242',
    base900:    '#14141E'
  },
  typography: {
    sizes: {
      xxs: {
        textSize: '10px',
        lineHeight: 1.3
      },
      xs: {
        textSize: '12px',
        lineHeight: 1.3
      },
      s:  {
        textSize: '14px',
        lineHeight: 1.3
      },
      m:  {
        textSize: '16px',
        lineHeight: 1.5
      },
      l: {
        textSize: '20px',
        lineHeight: 1.4
      },
      xl: {
        textSize: '32px',
        lineHeight: 1.25
      },
      h3: {
        textSize: '20px',
        lineHeight: 1.4
      },
      h2: {
        textSize: '32px',
        lineHeight: 1.25
      },
      h1: {
        textSize: '72px',
        lineHeight: 1.22
      }
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 600,
      black: 800
    },
  }
}
