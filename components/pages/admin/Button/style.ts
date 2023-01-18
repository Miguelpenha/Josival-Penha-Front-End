import styled from 'styled-components'

export const Container = styled.button`
    width: 18rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    margin-top: 2rem;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    border: 1px solid ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
    }

    svg {
        margin-left: 5%;
        fill: ${props => props.theme.primary};
    }
`

export const Text = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`