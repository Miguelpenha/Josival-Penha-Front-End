import styled from 'styled-components'

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

export const Container = styled.div`
    gap: 2em;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3em;
    justify-content: space-around;
`

export const Form = styled.form`
    width: 24rem;
    margin: 0 2em;
    padding: 2rem;
    display: flex;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        width: 18rem;
    }
`

interface IField {
    maxWidth?: boolean
}

export const Field = styled.div<IField>`
    display: flex;
    margin-bottom: 12%;
    align-self: center;
    flex-direction: column;
    width: ${props => props.maxWidth ? 100 : 85}%;
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
`

export const Preview = styled.div`
    width: 24em;
    margin: 0 2em;
    overflow: hidden;
    height: min-content;
    border-radius: 20px;
    box-shadow: ${props => props.theme.primary} 0px 3px 7px 2px;

    @media screen and (max-width: 900px) {
        width: 18rem;
    }
`