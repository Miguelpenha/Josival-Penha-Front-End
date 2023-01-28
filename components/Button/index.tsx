import { FC, ButtonHTMLAttributes } from 'react'
import { Container, Text } from './style'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, children, ...props }) => {
    return (
        <Container {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button