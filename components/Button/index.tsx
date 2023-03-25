import { FC, ButtonHTMLAttributes, useState } from 'react'
import { Container, Text } from './style'
import Loading from '../Loading'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    onClick: () => Promise<void>
}

const Button: FC<IProps> = ({ disabled, onClick, loading=false, title, children, ...props }) => {
    const [loadingState, setLoadingState] = useState(false)
    
    async function handleClick() {
        loading && setLoadingState(true)

        await onClick()

        loading && setLoadingState(false)
    }
    
    return (
        <Container onClick={handleClick} loading={loadingState} disabled={Boolean(disabled) || loadingState} {...props}>
            {(loading && loadingState) ? <Loading/> : children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button