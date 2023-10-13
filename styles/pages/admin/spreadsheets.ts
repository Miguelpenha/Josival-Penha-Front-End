import styled from 'styled-components'
import Button from '../../../components/Button'

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

export const ContainerButtons = styled.div`
    gap: 2.2vw;
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    align-self: center;
    flex-direction: row;
    justify-content: center;
`

export const ButtonSpreadsheet = styled(Button)`
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

    span {
        border-top-color: #00ac47;
    }
`