import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import base from '../../../../services/api/base'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, ButtonSubmit } from '../../../../styles/pages/admin/notify/whatsapp/report-card'
import Select from '../../../../components/Select'
import Loading from '../../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    unit: string
    student: string
}

const units = [
    '1° unidade',
    '2° unidade',
    '3° unidade',
    '4° unidade'
]

function ReportCard() {
    const { watch, setValue } = useForm<IForm>()
    const { student, unit } = watch()
    const router = useRouter()
    const { data: students } = api.get<IStudent[]>('/students')

    async function handleSubmit() {
        await base.get(`/notify/report-card/${student}?unit=${unit}`)

        router.push('/admin/notify')

        toast('Notificação enviada com sucesso!', {
           type: 'success' 
        })
    }

    return <>
        <Head>
            <title>Notificar boletim</title>
        </Head>
        <ContainerDefault back="/admin/notify/whatsapp">
            <Title>Notificar boletim</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                {students ? <>
                    <Select
                        required
                        name="student"
                        placeholder="Nome do aluno..."
                        onChange={({ value: student }) => setValue('student', student)}
                        options={[...students.map(student => ({
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
                        onChange={({ value: unit }) => setValue('unit', unit)}
                        options={units.map((unit, index) => ({
                            label: unit,
                            value: index+1
                        }))}
                    />
                    <ButtonSubmit loading disabled={!student || !unit} onClick={handleSubmit} title="Notificar"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default ReportCard

export const getServerSideProps = getServerSidePropsAuthAdmin