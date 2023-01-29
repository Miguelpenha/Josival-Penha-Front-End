import Head from 'next/head'
import ContainerPD from '../../components/ContainerPD'
import { Title } from '../../styles/pages/admin'
import ButtonLink from '../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Admin() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <ContainerPD>
            <Title>Sistema Josival Penha</Title>
            <ButtonLink href="admin/spreadsheets" title="Planilhas">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
                </svg>
            </ButtonLink>
            <ButtonLink href="admin/dashboards" title="Dashboards">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <rect fill="none" height="24" width="24"/>
                    <path d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/>
                </svg>
            </ButtonLink>
            <ButtonLink href="admin/documents" title="Documentos">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
            </ButtonLink>
        </ContainerPD>
    </>
}

export default Admin

export const getServerSideProps = getServerSidePropsAuthAdmin