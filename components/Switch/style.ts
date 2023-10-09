import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-left: 2rem;
    margin-bottom: 2rem;
    align-items: center;
    flex-direction: row;
`

export const Label = styled.label`
    font-weight: bold;
    margin-left: 1rem;
    color: ${props => props.theme.secondaryColor};
`