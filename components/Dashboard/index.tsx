import { FC, useRef, useState, useEffect } from 'react'
import { Container, Icon, ContainerDashboard } from './style'
import Link from 'next/link'

interface Iprops {
    url: string
}

const Dashboard: FC<Iprops> = ({ url }) => {
    const dashboardRef = useRef<HTMLIFrameElement>(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (dashboardRef.current) {
            dashboardRef.current.onload = () => setTimeout(() => setShow(true), 1300)
        }
    }, [])
    
    return <>
        <Container>
            {show && (
                <Link title="Voltar" href="/admin/dashboards">
                    <Icon width="3vw" height="3vw" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <rect fill="none" height="24" width="24"/>
                        <g>
                            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
                        </g>
                    </Icon>
                </Link>
            )}
            <ContainerDashboard ref={dashboardRef} id="dashboard" src={url} allowFullScreen/>
        </Container>
    </>
}

export default Dashboard