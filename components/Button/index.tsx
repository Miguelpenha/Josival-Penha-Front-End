import { FC, ButtonHTMLAttributes } from 'react'
import { Container, Text } from './style'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ disabled, title, children, ...props }) => {
    return (
        <Container disabled={Boolean(disabled)} {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button