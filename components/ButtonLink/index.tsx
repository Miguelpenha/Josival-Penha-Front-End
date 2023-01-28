import { LinkProps } from 'next/link'
import { FC } from 'react'
import { Container } from './style'
import { Text } from '../Button/style'

interface IProps extends LinkProps {
    title: string
    children: any
}

const ButtonLink: FC<IProps> = ({ title, children, ...props }) => {
    return (
        <Container {...props as any}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default ButtonLink