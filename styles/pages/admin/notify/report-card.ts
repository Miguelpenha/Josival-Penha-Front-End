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
    width: 40em;
    display: flex;
    align-self: center;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    padding: 3em 5em 3em 5em;
    background-color: ${props => props.theme.backgroundColorSecondary};

    @media screen and (max-width: 680px) {
        width: 90vw;
        padding: 3vh 5vw 3vh 5vw;
    }
`

export const ButtonSubmit = styled(ButtonSubmitRaw)`
    margin-top: 1.5em;
`