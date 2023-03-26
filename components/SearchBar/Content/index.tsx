import { KBarPortal, KBarPositioner } from 'kbar'
import { Container, Search } from './style'
import Results from '../Results'

function Content() {
    return (
        <KBarPortal>
            <KBarPositioner>
                <Container>
                    <Search/>
                    <Results/>
                </Container>
            </KBarPositioner>
        </KBarPortal>
    )
}

export default Content