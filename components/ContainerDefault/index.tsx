import { FC, HTMLAttributes, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container, ButtonBack, IconButtonBack } from './style'

interface IProps extends HTMLAttributes<HTMLElement> {
    back?: string
}

const ContainerDefault: FC<IProps> = ({ back, children, ...props }) => {
    const router = useRouter()

    useEffect(() => {
        if (back) {
            document.addEventListener('keypress', event => {
                if (event.key === '\u0002') {
                    router.replace(back)
                }
            })
        }
    }, [])

    return (
        <Container {...props}>
            {back && (
                <ButtonBack title="Voltar" href={back}>
                    <IconButtonBack xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <rect fill="none" height="24" width="24"/>
                        <g>
                            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
                        </g>
                    </IconButtonBack>
                </ButtonBack>
            )}
            {children}
        </Container>
    )
}

export default ContainerDefault