import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 3%;
    align-self: center;
`

export const ContainerIcon = styled.button`
    border: none;
    display: flex;
    cursor: pointer;
    margin-right: 2%;
    background: none;
    align-self: center;
    border-radius: 50%;
`

export const Icon = styled.svg`
    align-self: center;
    justify-self: center;
    fill: ${props => props.theme.primary};
`

export const InputStyled = styled.input`
    width: 100%;
    border: none;
    padding: 0.8rem;
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