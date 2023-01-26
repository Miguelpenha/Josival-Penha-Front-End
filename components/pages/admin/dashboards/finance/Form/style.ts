import styled from 'styled-components'

export const Container = styled.form`
    width: 20rem;
    padding: 2rem;
    margin-top: 3rem;
    align-self: center;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Title = styled.h3`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
    color: ${props => props.theme.primary};
`

export const ButtonSubmit = styled.button`
    width: 14rem;
    margin: auto;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 10px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.backgroundColorSecondary};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const TextButtonSubmit = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`