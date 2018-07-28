import { css } from 'styled-components'

export const modifier = key => (...args) => css`
  ${props => props[key] && css(...args)};
`