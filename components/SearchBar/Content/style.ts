import styled from 'styled-components'
import { KBarAnimator, KBarSearch } from 'kbar'

export const Container = styled(KBarAnimator)`
    width: 40em;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
    
    #kbar-listbox {
        min-height: 6em;
    }
`

export const Search = styled(KBarSearch)`
    width: 95%;
    margin: 1em;
    padding: 1em;
    border-radius: 8px;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.backgroundColor};

    :focus {
        outline: none;
        border-width: 1.5px;
        border-color: ${props => props.theme.primary};
    }
`