import { FC } from 'react'
import { Container, Text } from './style'

interface Iprops {
    href: string
    title: string
    children: any
}

const Button: FC<Iprops> = ({ href, title, children, ...props }) => {
    return (
        <Container href={href} {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button