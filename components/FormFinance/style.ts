import styled from 'styled-components'
import ButtonSubmitRaw from '../ButtonSubmit'

export const Container = styled.form`
    width: 20rem;
    display: flex;
    padding: 2rem;
    margin-top: 3rem;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
`

export const Title = styled.h3`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
    color: ${props => props.theme.secondaryColor};
`

export const ButtonSubmit = styled(ButtonSubmitRaw)`
    margin-top: 2rem;
    background-color: ${props => props.theme.backgroundColor};

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`