import { FC, ButtonHTMLAttributes } from 'react'
import { Container, Text } from './style'
import { Loading } from '../Loading'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}

const Button: FC<IProps> = ({ disabled, loading=false, title, children, ...props }) => {
    return (
        <Container loading={loading} disabled={Boolean(disabled) || loading} {...props}>
            {loading ? <Loading/> : children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button