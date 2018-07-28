import styled from 'styled-components'
import { modifier } from '../.././utils/styles.js'

const Button = styled.button`
background-color: blue;
border: 1px solid transparent;
display: inline-block;
height: 40px;
width: 60px;
font-size: 16px;

${modifier('primary')`
    background-color: black;
    border-color: black;
    color: white;

    &:hover,
  `};
`
export default Button