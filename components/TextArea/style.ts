import styled from 'styled-components'

export const InputStyled = styled.textarea`
    width: 100%;
    border: none;
    margin-top: 3%;
    padding: 0.8rem;
    font-size: 1rem;
    resize: vertical;
    align-self: center;
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