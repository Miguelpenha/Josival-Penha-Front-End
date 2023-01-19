import Head from 'next/head'
import { Container, Title } from '../../styles/pages/admin'
import Button from '../../components/pages/admin/spreadsheets/Button'
import generateSpreadsheet from '../../components/pages/admin/spreadsheets/generateSpreadsheet'
import getServerSidePropsAuthAdmin from '../../utils/getServerSidePropsAuthAdmin'

function Spreadsheets() {
    return <>
        <Head>
            <title>Planilhas</title>
        </Head>
        <Container>
            <Title>Planilhas</Title>
            <Button onClick={() => generateSpreadsheet('/teachers/export', 'Planilha de professoras.xlsx')} title="Planilha de professoras">
                <svg width="2.8em" height="2.8em" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/>
                </svg>
            </Button>
            <Button onClick={() => generateSpreadsheet('/classes/export', 'Planilha de turmas.xlsx')} title="Planilha de turmas">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
            </Button>
            <Button onClick={() => generateSpreadsheet('/students/export', 'Planilha de alunos.xlsx')} title="Planilha de alunos">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
            </Button>
        </Container>
    </>
}

export default Spreadsheets

export const getServerSideProps = getServerSidePropsAuthAdmin