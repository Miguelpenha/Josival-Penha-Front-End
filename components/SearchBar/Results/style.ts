import styled from 'styled-components'

interface IResult {
    active: boolean
}

export const Result = styled.div<IResult>`
    display: flex;
    margin: 0.5em;
    padding: 0.5em;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 10px;
    align-items: center;
    background-color: ${props => props.active ? props.theme.backgroundColor : props.theme.backgroundColorSecondary};
    
    :hover {
        background-color: ${props => props.theme.backgroundColor};
    }

    svg {
        width: 1.5em;
        height: auto;
        margin-right: 0.8em;
        fill: ${props => props.theme.primary};
    }
`