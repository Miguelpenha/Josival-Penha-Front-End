import styled from 'styled-components'

export const Title = styled.h1`
    width: 80%;
    font-size: 2.5vw;
    margin-top: 3rem;
    align-self: center;
    text-align: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 8vw;
    }
`