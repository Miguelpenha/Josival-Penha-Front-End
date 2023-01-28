import styled from 'styled-components'
import Button from './Button'

const ButtonSubmit = styled(Button)`
    margin: 0%;
    width: 14rem;
    background-color: ${props => props.theme.backgroundColor};

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export default ButtonSubmit