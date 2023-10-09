import styled from 'styled-components'
import ButtonSubmitRaw from '../../../../components/ButtonSubmit'

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
    height: 13em;
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

export const ButtonSubmit = styled(ButtonSubmitRaw)`
    margin-top: 1.5em;
`