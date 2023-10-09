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
    fill: ${props => props.theme.secondaryColor};
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

    ::-webkit-calendar-picker-indicator {
        ${props => (
            `
                background: url('data:image/svg+xml;utf8,<svg style="color: ${props.theme.primary.replace('#', '')};" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
            ` 
        )}
    }
`