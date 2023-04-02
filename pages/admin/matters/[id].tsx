import { useRouter } from 'next/router'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title } from '../../../styles/pages/admin/matters'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

interface IQuery {
    id: string
}

function Matter() {
    const router = useRouter()
    const { id } = router.query as unknown as IQuery
    const { data: student } = api.get<IStudent>(`/students/${id}`)
    
    return <>
        <Head>
            <title>Notas</title>
        </Head>
        <ContainerDefault back="/admin/matters">
            <Title>Notas de {student?.name}</Title>
        </ContainerDefault>
    </>
}

export default Matter

export const getServerSideProps = getServerSidePropsAuthAdmin