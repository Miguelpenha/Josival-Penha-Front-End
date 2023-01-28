import { FC, HTMLAttributes } from 'react'
import useLoad from './useLoad'
import { Container, ContainerLoading, Loading } from './style'

const ContainerPD: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    const loading = useLoad()

    if (loading) {
        return (
            <Container {...props}>
                {children}
            </Container>
        )
    } else {
        return (
            <ContainerLoading {...props}>
                <Loading/>
            </ContainerLoading>
        )
    }
}

export default ContainerPD