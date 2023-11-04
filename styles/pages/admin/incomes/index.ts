import styled, { css } from 'styled-components'

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
    gap: 3em;
    display: flex;
    padding: 0.5em;
    border-radius: 10px;
    justify-content: flex-start;
    background-color: ${props => props.theme.color};

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
    align-self: center;
    text-align: center;
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