import { ButtonHTMLAttributes, FC } from 'react'
import { Container, Text } from './style'

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any
}

const Button: FC<Iprops> = ({ title, children, ...props }) => {
    return (
        <Container {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button