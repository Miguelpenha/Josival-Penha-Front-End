import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 80%;
    font-size: 2.5vw;
    margin-top: 3rem;
    text-align: center;
    align-self: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 7.5vw;
    }
`

const styleButton = css`
    width: 18rem;
    display: flex;
    padding: 1.2rem;
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
`

export const Button = styled.button`
    ${styleButton}

    cursor: pointer;
`

export const ButtonLink = styled(Link)`
    ${styleButton}
`

export const IconButton = styled.svg`
    margin-left: 3%;
    fill: ${props => props.theme.primary};
`

export const TextButton = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`