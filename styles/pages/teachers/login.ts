import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

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
    width: 20rem;
    padding: 2rem;
    display: flex;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColorSecondary};
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
`

export const Input = styled.input`
    padding: 4%;
    border: none;
    margin-top: 3%;
    font-size: 1rem;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};

    :focus {
        outline: none;
        border-radius: 5px;
    }

    ::placeholder {
        color: ${props => props.theme.secondary};
    }
`

export const ButtonSubmit = styled.button`
    width: 14rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.backgroundColorSecondary};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const TextButtonSubmit = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`