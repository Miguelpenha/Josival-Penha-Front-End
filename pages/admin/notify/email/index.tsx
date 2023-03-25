import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title } from '../../../../styles/pages/admin/notify'
import ButtonLink from '../../../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'

function Email() {
    return <>
        <Head>
            <title>Notificações</title>
        </Head>
        <ContainerDefault back="/admin/notify">
            <Title>Notificar</Title>
        </ContainerDefault>
    </>
}

export default Email

export const getServerSideProps = getServerSidePropsAuthAdmin