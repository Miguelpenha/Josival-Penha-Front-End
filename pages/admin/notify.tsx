import Head from 'next/head'
import ContainerPD from '../../components/ContainerPD'
import { Title } from '../../styles/pages/admin/notify'
import Button from '../../components/Button'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Notify() {
    function handleReportCard() {
        
    }

    return <>
        <Head>
            <title>Notificar responsáveis</title>
        </Head>
        <ContainerPD>
            <Title>Notificar responsáveis</Title>
            <Button title="Notificar boletins" onClick={handleReportCard}/>
        </ContainerPD>
    </>
}

export default Notify

export const getServerSideProps = getServerSidePropsAuthAdmin