import api from '../../../services/api'
import IStudent from '../../../types/student'
import { FormEvent } from 'react'
import base from '../../../services/api/base'
import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title, Form, ButtonSubmit } from '../../../styles/pages/admin/notify/report-card'
import Select from '../../../components/Select'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Notify() {
    const { data: students } = api.get<IStudent[]>('/students')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const to = event.currentTarget.student.value

        await base.get(`/notify/report-card/${to}`)
    }

    return <>
        <Head>
            <title>Notificar boletins</title>
        </Head>
        <ContainerPD>
            <Title>Notificar boletins</Title>
            <Form onSubmit={handleSubmit}>
                <Select
                    name="student"
                    defaultValue="Todos"
                    // onChange={({ value: student }) => setStudentSelect(student)}
                    options={students && [...students.map(student => ({
                        value: student._id,
                        label: student.name
                    })), {
                        value: 'all',
                        label: 'Todos'
                    }]}
                />
                <ButtonSubmit type="submit" title="Notificar"/>
            </Form>
        </ContainerPD>
    </>
}

export default Notify

export const getServerSideProps = getServerSidePropsAuthAdmin