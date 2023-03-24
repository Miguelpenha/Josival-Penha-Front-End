import Head from 'next/head'
import ContainerPD from '../../../../components/ContainerDefault'
import { Title } from '../../../../styles/pages/admin/notify'
import ButtonLink from '../../../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'

function Email() {
    return <>
        <Head>
            <title>Notificações</title>
        </Head>
        <ContainerPD>
            <Title>Notificar</Title>
        </ContainerPD>
    </>
}

export default Email

export const getServerSideProps = getServerSidePropsAuthAdmin