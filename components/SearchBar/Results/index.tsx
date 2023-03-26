import { useMatches, KBarResults } from 'kbar'
import { ReactElement } from 'react'
import { Result } from './style'

function Results() {
    const { results } = useMatches()

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                if (typeof item === 'string') {
                    return <Result active={active}>{item}</Result>
                } else {
                    const Icon = () => item.icon as ReactElement<any, any>
                    
                    return (
                        <Result active={active}>
                            <Icon/>
                            {item.name}
                        </Result>  
                    )
                }
            }}
        />
    )
}

export default Results