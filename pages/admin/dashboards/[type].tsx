import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import FormFinance from '../../../components/FormFinance'
import Dashboard from '../../../components/Dashboard'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

interface IQuery {
    type: 'finance' | 'general'
}

function TypeDashboard() {
    const router = useRouter()
    const { type } = router.query as unknown as IQuery
    const [show, setShow] = useState(false)
    
    return <>
        <Head>
            <title>Dashboard financeiro</title>
        </Head>
        <ContainerDefault back={(show || type === 'general') ? undefined : '/admin/dashboards'}>
            {type === 'finance' && !show && <FormFinance onCorrect={() => setShow(true)}/>}
            {(show || type === 'general') && <Dashboard url={type === 'finance' ? process.env.NEXT_PUBLIC_URL_DASHBOARD_FINANCE : process.env.NEXT_PUBLIC_URL_DASHBOARD_GENERAL}/>}
        </ContainerDefault>
    </>
}

export default TypeDashboard

export const getServerSideProps = getServerSidePropsAuthAdmin