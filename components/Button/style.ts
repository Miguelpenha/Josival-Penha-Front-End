import styled, { css } from 'styled-components'

interface IStyleContainer {
    loading: boolean
    disabled: boolean
}

export const styleContainer = css<IStyleContainer>`
    margin: 1.5%;
    width: 18rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.backgroundColor};

    ${props => props.loading && css`
        cursor: default;
    `}

    ${props => !props.disabled && css`
        :hover {
            transform: scale(1);
            border: 1px solid ${props => props.theme.primary};
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;

            svg {
                fill: ${props => props.theme.primary};
            }

            span {
                color: ${props => props.theme.primary};
            }
        }
    `}

    svg {
        margin-left: 1%;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        fill: ${props => props.theme.secondaryColor};
    }

    span {
        transition-duration: 0.2s;
        transition-timing-function: linear;
    }
`

export const Container = styled.button`
    ${styleContainer}
`

export const styleText = css`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
`

export const Text = styled.span`
    ${styleText}
`