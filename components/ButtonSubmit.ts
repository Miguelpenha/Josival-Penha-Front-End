import styled, { css } from 'styled-components'
import Button from './Button'

const ButtonSubmit = styled(Button)`
    margin: 0%;
    width: 14rem;
    
    background-color: ${props => props.disabled ? props.theme.backgroundColorSecondary : props.theme.backgroundColor};

    ${props => !props.disabled && css`
        :hover {
            background-color: ${props => props.theme.backgroundColorSecondary};
        }
    `}
`

export default ButtonSubmit