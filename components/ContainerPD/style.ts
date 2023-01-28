import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const ContainerLoading = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Loading = styled.span`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    border: 12px solid ${props => props.theme.backgroundColorSecondary};
    border-top: 12px solid ${props => props.theme.primary};

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`