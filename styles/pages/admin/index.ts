import styled from 'styled-components'
import ButtonLink from '../../../components/ButtonLink'

export const Title = styled.h1`
    width: 80%;
    font-size: 2.5vw;
    margin-top: 3rem;
    text-align: center;
    align-self: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 8vw;
    }
`

export const ButtonSpreadsheet = styled(ButtonLink)`
    background-color: #00ac47;

    :hover {
        border-color: #00ac47;
        box-shadow: #00ac47 0px 3px 7px 0px;
        background-color: ${props => props.theme.backgroundColor};

        svg {
            fill: #00ac47;
        }

        span {
            color: #00ac47;
        }
    }
`