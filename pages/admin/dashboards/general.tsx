import Head from 'next/head'
import { Container } from '../../../styles/pages/admin/dashboards/general'
import DashboardComponent from '../../../components/pages/admin/dashboards/Dashboard'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function General() {
    return <>
        <Head>
            <title>Dashboard geral</title>
        </Head>
        <Container>
            <DashboardComponent url={process.env.NEXT_PUBLIC_URL_DASHBOARD_GENERAL}/>
        </Container>
    </>
}

export default General

export const getServerSideProps = getServerSidePropsAuthAdmin