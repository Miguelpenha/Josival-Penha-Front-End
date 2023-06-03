import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useState } from 'react'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, ContainerStudents } from '../../../styles/pages/admin/students'
import Student from '../../../components/Student'
import InputSearch from '../../../components/InputSearch'
import ButtonLink from '../../../components/ButtonLink'
import Loading from '../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Students() {
    const { data: students, mutate } = api.get<IStudent[]>('/students')
    const [search, setSearch] = useState('')

    return <>
        <Head>
            <title>Alunos</title>
        </Head>
        <ContainerDefault back="/admin">
            <Title>Alunos</Title>
            <ButtonLink href="students/create" title="Cadastrar">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            </ButtonLink>
            <InputSearch value={search} onChange={ev => setSearch(ev.target.value)} placeholder="Pesquisar aluno..."/>
            <ContainerStudents>
                {students ? students.map((student, index) => {
                    if (student.name.toUpperCase().includes(search.toUpperCase())) {
                        return (
                            <Student mutate={mutate as any} key={index} student={student}/>
                        )
                    }
                }) : <Loading size={90} weight={8} speed={0.8}/>}
            </ContainerStudents>
        </ContainerDefault>
    </>
}

export default Students

export const getServerSideProps = getServerSidePropsAuthAdmin