import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import base from '../../../../services/api/base'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, ButtonSubmit } from '../../../../styles/pages/admin/notify/whatsapp/bank-slip'
import Select from '../../../../components/Select'
import Loading from '../../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'
import Input from '../../../../components/Input'

interface IForm {
    month: string
    student: string
}

function BankSlip() {
    const { watch, setValue, register } = useForm<IForm>()
    const { student, month } = watch()
    const router = useRouter()
    const { data: students } = api.get<IStudent[]>('/students')

    async function handleSubmit() {
        const telephoneIsDDD = student.replace(/-/g, ' ').replace(/\(/g, '').replace(/\)/g, '').replace(/\s+/g, '').replace(/\+/g, '')
        const { link } = (await base.post<{ link: string }>(`/notify/whatsapp/${telephoneIsDDD.includes('55') ? telephoneIsDDD : `55${telephoneIsDDD}`}`, { month })).data

        await navigator.clipboard.writeText(link)

        router.push('/admin/notify')

        toast('Link do Whatsapp copiado para a área de transferência!', {
           type: 'success' 
        })
    }

    return <>
        <Head>
            <title>Notificar boleto</title>
        </Head>
        <ContainerDefault back="/admin/notify/whatsapp">
            <Title>Notificar boleto</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                {students ? <>
                    <Select
                        required
                        name="student"
                        placeholder="Nome do aluno..."
                        onChange={({ value: student }) => setValue('student', student)}
                        options={[...students.map(student => ({
                            value: student.telephone,
                            label: student.name
                        })), {
                            value: 'all',
                            label: 'Todos'
                        }]}
                    />
                    <Input
                        required
                        {...register('month')}
                        placeholder="Mês do boleto..."
                    />
                    <ButtonSubmit loading disabled={!student || !month} onClick={handleSubmit} title="Notificar"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default BankSlip

export const getServerSideProps = getServerSidePropsAuthAdmin