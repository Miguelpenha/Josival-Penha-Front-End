import Head from 'next/head'
import { Container, Title } from '../../styles/pages/admin'
import Button from '../../components/pages/admin/spreadsheets/Button'
import generateSpreadsheet from '../../components/pages/admin/spreadsheets/generateSpreadsheet'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Spreadsheets() {
    const filtersGeneralSpreadsheet = ['Alunos', 'Turmas', 'Professoras', 'Financeiro']

    return <>
        <Head>
            <title>Planilhas</title>
        </Head>
        <Container>
            <Title>Planilhas</Title>
            <Button onClick={() => generateSpreadsheet('/export/Professoras', 'Planilha de professoras.xlsx')} title="Professoras">
                <svg width="2.8em" height="2.8em" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/>
                </svg>
            </Button>
            <Button onClick={() => generateSpreadsheet('/export/Turmas', 'Planilha de turmas.xlsx')} title="Turmas">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
            </Button>
            <Button onClick={() => generateSpreadsheet('/export/Alunos', 'Planilha de alunos.xlsx')} title="Alunos">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
            </Button>
            <Button onClick={() => generateSpreadsheet('/export/Financeiro', 'Planilha de financeiro.xlsx')} title="Financeiro">
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
            <Button onClick={() => generateSpreadsheet(`/export/${filtersGeneralSpreadsheet.toString()}`, 'Planilha geral.xlsx')} title="Geral">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
                </svg>
            </Button>
        </Container>
    </>
}

export default Spreadsheets

export const getServerSideProps = getServerSidePropsAuthAdmin