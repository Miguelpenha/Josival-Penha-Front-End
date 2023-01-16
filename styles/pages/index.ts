import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 2.5vw;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 7.5vw;
    }
`