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

export const Form = styled.form`
    width: 24rem;
    padding: 2rem;
    display: flex;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        width: 18rem;
    }
`

export const Field = styled.div`
    width: 85%;
    display: flex;
    margin-bottom: 12%;
    align-self: center;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
`