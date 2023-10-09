import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    padding: 1em;
    width: 23rem;
    border-radius: 10px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.backgroundColor};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;

        span {
            color: ${props => props.theme.primary};
        }

        svg {
            fill: ${props => props.theme.primary};
        }
    }

    @media screen and (max-width: 900px) {
        width: 18em;
    }
`

export const Name = styled.span`
    font-size: 1.2rem;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.secondaryColor};
`

export const Footer = styled.div`
    gap: 1em;
    display: flex;
    margin-top: 1em;
    align-items: center;
`

const styleContainerOption = css`
    border: none;
    display: flex;
    padding: 0.2em;
    cursor: pointer;
    border-radius: 50%;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const ContainerOption = styled.button`
    ${styleContainerOption}
`

export const ContainerOptionLink = styled(Link)`
    ${styleContainerOption}
`

export const Option = styled.svg`
    width: 2.2em;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    fill: ${props => props.theme.secondaryColor};
`