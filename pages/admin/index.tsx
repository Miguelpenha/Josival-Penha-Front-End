import Head from 'next/head'
import ContainerDefault from '../../components/ContainerDefault'
import { Title, ButtonSpreadsheet } from '../../styles/pages/admin'
import { ContainerButtons } from '../../styles/pages'
import ButtonLink from '../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Admin() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <ContainerDefault settings>
            <Title>Sistema Josival Penha</Title>
            <ContainerButtons>
                <ButtonLink href="admin/students" title="Alunos">
                    <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                </ButtonLink>
                <ButtonLink href="admin/incomes" title="Receitas">
                    <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/>
                    </svg>
                </ButtonLink>
                <ButtonLink href="admin/matters" title="Notas">
                    <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                </ButtonLink>
                <ButtonSpreadsheet href="admin/spreadsheets" title="Planilhas">
                    <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
                    </svg>
                </ButtonSpreadsheet>
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
                <ButtonLink href="admin/notify" title="Notificar">
                    <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </ButtonLink>
            </ContainerButtons>
        </ContainerDefault>
    </>
}

export default Admin

export const getServerSideProps = getServerSidePropsAuthAdmin