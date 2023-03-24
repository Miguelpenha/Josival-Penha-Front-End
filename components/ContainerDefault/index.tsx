import { FC, HTMLAttributes } from 'react'
import { Container } from './style'

const ContainerDefault: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default ContainerDefault