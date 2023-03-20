import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title } from '../../../styles/pages/admin/notify'
import ButtonLink from '../../../components/ButtonLink'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Notify() {
    return <>
        <Head>
            <title>Notificar responsáveis</title>
        </Head>
        <ContainerPD>
            <Title>Notificar responsáveis</Title>
            <ButtonLink href="notify/report-card" title="Notificar boletins">
                <svg width="2.3em" height="2.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
            </ButtonLink>
        </ContainerPD>
    </>
}

export default Notify

export const getServerSideProps = getServerSidePropsAuthAdmin