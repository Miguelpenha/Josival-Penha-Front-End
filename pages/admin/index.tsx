import Head from 'next/head'
import { Container, Title } from '../../styles/pages/admin'
import Button from '../../components/pages/admin/Button'
import generateSpreadsheet from '../../components/pages/admin/generateSpreadsheet'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Admin() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <Container>
            <Title>Sistema Josival Penha</Title>
            <Button onClick={generateSpreadsheet} title="Gerar planilha de alunos">
                <svg width="3em" height="3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
                </svg>
            </Button>
        </Container>
    </>
}

export default Admin

export const getServerSideProps = getServerSidePropsAuthAdmin