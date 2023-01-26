import { useState } from 'react'
import Head from 'next/head'
import { Container } from '../../../styles/pages/admin/dashboards/finance'
import Form from '../../../components/pages/admin/dashboards/finance/Form'
import DashboardComponent from '../../../components/pages/admin/dashboards/Dashboard'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Finance() {
    const [show, setShow] = useState(false)
    
    return <>
        <Head>
            <title>Dashboard financeiro</title>
        </Head>
        <Container>
            {!show && <Form onCorrect={() => setShow(true)}/>}
            {show && <DashboardComponent url={process.env.NEXT_PUBLIC_URL_DASHBOARD_FINANCE}/>}
        </Container>
    </>
}

export default Finance

export const getServerSideProps = getServerSidePropsAuthAdmin