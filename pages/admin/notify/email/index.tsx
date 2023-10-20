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
            <ButtonLink href="email/notice" title="Aviso">
                <svg width="2.3em" height="2.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/>
                </svg>
            </ButtonLink>
        </ContainerDefault>
    </>
}

export default Email

export const getServerSideProps = getServerSidePropsAuthAdmin