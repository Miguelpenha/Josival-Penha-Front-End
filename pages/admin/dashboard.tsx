import Head from 'next/head'
import { Container, Icon, ContainerDashboard } from '../../styles/pages/admin/dashboard'
import Link from 'next/link'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'
import { useEffect, useRef, useState } from 'react'

function Dashboard() {
    const dashboardRef = useRef<HTMLIFrameElement>(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (dashboardRef.current) {
            dashboardRef.current.onload = () => setTimeout(() => setShow(true), 1300)
        }
    }, [])
    
    return <>
        <Head>
            <title>Dashboard</title>
        </Head>
        <Container>
            {show && (
                <Link title="Voltar" href="/admin">
                    <Icon width="3vw" height="3vw" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <rect fill="none" height="24" width="24"/>
                        <g>
                            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
                        </g>
                    </Icon>
                </Link>
            )}
            <ContainerDashboard ref={dashboardRef} id="dashboard" src={process.env.NEXT_PUBLIC_URL_DASHBOARD} allowFullScreen/>
        </Container>
    </>
}

export default Dashboard

export const getServerSideProps = getServerSidePropsAuthAdmin