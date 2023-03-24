import Head from 'next/head'
import ContainerPD from '../../components/ContainerDefault'
import { Title } from '../../styles/pages/teachers'
import getServerSidePropsAuthTeacher from '../../utils/getServerSidePropsAuthTeacher'

function Teachers() {
    return <>
        <Head>
            <title>Sistema Josival Penha</title>
        </Head>
        <ContainerPD>
            <Title>Sistema Josival Penha</Title>
        </ContainerPD>
    </>
}

export default Teachers

export const getServerSideProps = getServerSidePropsAuthTeacher