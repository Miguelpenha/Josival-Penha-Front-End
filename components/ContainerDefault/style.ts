import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const ButtonBack = styled(Link)`
    top: 4%;
    left: 1.5%;
    padding: 0.5em;
    position: absolute;
    border-radius: 50%;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const IconButtonBack = styled.svg`
    width: 3em;
    height: 3em;
    fill: ${props => props.theme.primary};
`

export const ButtonSettings = styled(Link)`
    top: 4%;
    right: 1.5%;
    padding: 0.5em;
    position: absolute;
    border-radius: 50%;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const IconButtonSettings = styled.svg`
    width: 3em;
    height: 3em;
    fill: ${props => props.theme.primary};
`