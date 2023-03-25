import styled from 'styled-components'
import ButtonSubmitRaw from '../../../../../components/ButtonSubmit'

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
    width: 35em;
    height: 19em;
    display: flex;
    padding: 2em 3em;
    align-self: center;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColorSecondary};

    @media screen and (max-width: 680px) {
        width: 90vw;
        padding: 3vh 5vw;
    }

    @media screen and (max-width: 475px) {
        height: 16em;
    }
`

export const ButtonSubmit = styled(ButtonSubmitRaw)`
    margin-top: 1.5em;
`