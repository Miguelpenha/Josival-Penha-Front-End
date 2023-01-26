import Head from 'next/head'
import { Container, Title } from '../../../styles/pages/admin/dashboards'
import Button from '../../../components/pages/admin/dashboards/Button'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Dashboards() {
    return <>
        <Head>
            <title>Dashboards</title>
        </Head>
        <Container>
            <Title>Dashboards</Title>
            <Button href="dashboards/finance" title="Financeiro">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <g>
                            <rect height="7" width="3" x="4" y="10"/>
                            <rect height="7" width="3" x="10.5" y="10"/>
                            <rect height="3" width="20" x="2" y="19"/>
                            <rect height="7" width="3" x="17" y="10"/>
                            <polygon points="12,1 2,6 2,8 22,8 22,6"/>
                        </g>
                    </g>
                </svg>
            </Button>
            <Button href="dashboards/general" title="Geral">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
                </svg>
            </Button>
        </Container>
    </>
}

export default Dashboards

export const getServerSideProps = getServerSidePropsAuthAdmin