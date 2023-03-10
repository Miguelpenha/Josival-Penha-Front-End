import styled, { css } from 'styled-components'

interface IStyleContainer {
    disabled: boolean
}

export const styleContainer = css<IStyleContainer>`
    margin: 1.5%;
    width: 18rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    border: 1px solid ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.backgroundColorSecondary};

    ${props => !props.disabled && css`
        :hover {
            transform: scale(1);
            border: 1px solid ${props => props.theme.primary};
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
        }
    `}

    svg {
        margin-left: 1%;
        fill: ${props => props.theme.primary};
    }
`

export const Container = styled.button`
    ${styleContainer}
`

export const styleText = css`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`

export const Text = styled.span`
    ${styleText}
`