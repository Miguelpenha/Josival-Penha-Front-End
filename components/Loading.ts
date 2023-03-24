import styled from 'styled-components'

const Loading = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    border: 5px solid ${props => props.theme.backgroundColorSecondary};
    border-top: 5px solid ${props => props.theme.primary};

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loading