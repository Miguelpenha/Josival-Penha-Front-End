import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title } from '../../../styles/pages/admin/documents'
import ButtonLink from '../../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Documents() {
    return <>
        <Head>
            <title>Documentos</title>
        </Head>
        <ContainerDefault back="/admin">
            <Title>Documentos</Title>
            <ButtonLink href="documents/declarations" title="Declarações">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            </ButtonLink>
        </ContainerDefault>
    </>
}

export default Documents

export const getServerSideProps = getServerSidePropsAuthAdmin