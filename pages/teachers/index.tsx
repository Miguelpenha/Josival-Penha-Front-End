import Head from 'next/head'
import ContainerDefault from '../../components/ContainerDefault'
import { Title } from '../../styles/pages/teachers'
import getServerSidePropsAuthTeacher from '../../utils/getServerSidePropsAuthTeacher'

function Teachers() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <ContainerDefault settings>
            <Title>Sistema Josival Penha</Title>
        </ContainerDefault>
    </>
}

export default Teachers

export const getServerSideProps = getServerSidePropsAuthTeacher