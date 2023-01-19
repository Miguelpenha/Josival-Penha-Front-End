import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Icon = styled.svg`
    top: 1em;
    left: 4em;
    padding: 0.2%;
    border-radius: 40%;
    position: absolute;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    fill: ${props => props.theme.primary};

    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const ContainerDashboard = styled.iframe`
    height: 100vh;
`