import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title } from '../../../styles/pages/admin/students'
import ButtonLink from '../../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Students() {
    return <>
        <Head>
            <title>Alunos</title>
        </Head>
        <ContainerPD>
            <Title>Alunos</Title>
            <ButtonLink href="students/create" title="Cadastrar">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            </ButtonLink>
        </ContainerPD>
    </>
}

export default Students

export const getServerSideProps = getServerSidePropsAuthAdmin