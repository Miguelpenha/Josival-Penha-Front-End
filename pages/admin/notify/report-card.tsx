import { useRouter } from 'next/router'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import { FormEvent } from 'react'
import base from '../../../services/api/base'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title, Form, ButtonSubmit } from '../../../styles/pages/admin/notify/report-card'
import Select from '../../../components/Select'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

const units = [
    '1° unidade',
    '2° unidade',
    '3° unidade',
    '4° unidade'
]

function Notify() {
    const router = useRouter()
    const { data: students } = api.get<IStudent[]>('/students')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const { student, unit: unitRaw } = event.currentTarget

        const to = student.value
        const unit = unitRaw.value

        await base.get(`/notify/report-card/${to}?unit=${unit}`)

        router.push('/admin/notify')

        toast('Notificação enviada com sucesso!', {
           type: 'success' 
        })
    }

    return <>
        <Head>
            <title>Notificar boletins</title>
        </Head>
        <ContainerPD>
            <Title>Notificar boletins</Title>
            <Form onSubmit={handleSubmit}>
                <Select
                    required
                    name="student"
                    placeholder="Nome do aluno..."
                    options={students && [...students.map(student => ({
                        value: student._id,
                        label: student.name
                    })), {
                        value: 'all',
                        label: 'Todos'
                    }]}
                />
                <Select
                    required
                    name="unit"
                    placeholder="Unidade do boletim..."
                    options={units.map((unit, index) => ({
                        label: unit,
                        value: index+1
                    }))}
                />
                <ButtonSubmit type="submit" title="Notificar"/>
            </Form>
        </ContainerPD>
    </>
}

export default Notify

export const getServerSideProps = getServerSidePropsAuthAdmin