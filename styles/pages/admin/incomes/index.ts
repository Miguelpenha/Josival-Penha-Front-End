import styled, { css } from 'styled-components'
import Link from 'next/link'

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

export const ContainerIncomes = styled.div`
    gap: 1em;
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-self: center;
    flex-direction: row;
    border-radius: 10px;
    margin-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 750px) {
        width: 95%;
    }
`

export const Income = styled.div`
    display: flex;
    padding: 0.5em;
    max-width: 100%;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.color};
`

export const Fields = styled.div`
    gap: 3em;
    width: 100%;
    display: flex;
    max-width: 100%;
    justify-content: flex-start;

    @media screen and (max-width: 750px) {
        gap: 0.5em;
    }
`

interface IIncomeField  {
    bold?: boolean
    width?: number
}

export const IncomeField = styled.span<IIncomeField>`
    margin: 1em 0;
    overflow: hidden;
    align-self: center;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${props => props.width || 7}em;
    color: ${props => props.theme.secondaryColor};

    ${props => props.bold && css`
        font-weight: bold;
    `}

    @media screen and (max-width: 750px) {
        width: 100%;
    }

    @media screen and (max-width: 350px) {
        font-size: 0.8em;
    }
`

export const Options = styled.div`
    gap: 3em;
    width: 100%;
    display: flex;
    max-width: 100%;
    justify-content: flex-start;

    @media screen and (max-width: 750px) {
        gap: 0.5em;
    }
`

export const styleOption = css`
    border: none;
    display: flex;
    padding: 0.5em;
    cursor: pointer;
    align-self: center;
    border-radius: 50%;
    transform: scale(0.95);
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        transform: scale(1);
        background-color: ${props => props.theme.primary};
    }
    
    svg {
        width: 2.2em;
        fill: ${props => props.theme.secondaryColor};
    }
`

export const OptionLink = styled(Link)`
    ${styleOption}
`

export const OptionButton = styled.button`
    ${styleOption}
`