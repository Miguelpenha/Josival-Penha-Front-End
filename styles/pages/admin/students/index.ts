import styled from 'styled-components'

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

export const ContainerStudents = styled.div`
    gap: 2em;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    max-width: 1600px;
    align-self: center;
    flex-direction: row;
    margin-bottom: 2rem;
    justify-content: center;
`