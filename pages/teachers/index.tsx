import Head from 'next/head'
import { Container, Title } from '../../styles/pages/teachers'
import getServerSidePropsAuthTeacher from '../../utils/getServerSidePropsAuthTeacher'

function Teachers() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <Container>
            <Title>Sistema Josival Penha</Title>
        </Container>
    </>
}

export default Teachers

export const getServerSideProps = getServerSidePropsAuthTeacher