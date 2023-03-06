import styled from 'styled-components'
import Link from 'next/link'

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

export const ContainerStudents = styled.div`
    gap: 0.5em;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    max-width: 1600px;
    align-self: center;
    flex-direction: row;
    margin-bottom: 2rem;
    justify-content: center;
`

export const Student = styled(Link)`
    padding: 1em;
    width: 23rem;
    margin: 0.7%;
    border-radius: 10px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    border: 1px solid ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        transform: scale(1);
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 3px 7px 0px;
    }

    @media screen and (max-width: 900px) {
        width: 18em;
    }
`

export const NameStudent = styled.span`
    font-size: 1.2rem;
    color: ${props => props.theme.color};
`