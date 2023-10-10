import styled from 'styled-components'
import Button from '../../components/Button'

export const Title = styled.h1`
    width: 80%;
    font-size: 2.5vw;
    margin-top: 3rem;
    align-self: center;
    text-align: center;
    margin-bottom: 6rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 8vw;
    }
`

export const Field = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5em;
    color: ${props => props.theme.primary};
`

export const Data = styled.span`
    padding: 0.7em;
    cursor: pointer;
    font-size: 1.3em;
    text-align: center;
    border-radius: 15px;
    transform: scale(0.95);
    transition-duration: 0.15s;
    transition-timing-function: linear;
    border: 1px solid ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
    }
`

export const ButtonLogout = styled(Button)`
    margin-top: 8em;
`