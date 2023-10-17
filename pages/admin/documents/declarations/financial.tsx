import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import generateDocument from '../../../../components/generateDocument'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../../../styles/pages/admin/documents/declarations/financial'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import Loading from '../../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    month: string
    student: IStudent
}

function Documents() {
    const { data: students } = api.get<IStudent[]>('/students')
    const monthDefault = new Date().toLocaleString('pt-br', { month: 'long'})
    const { watch, setValue, register } = useForm<IForm>({ defaultValues: { month: monthDefault.charAt(0).toUpperCase() + monthDefault.slice(1) } })
    const { student, month } = watch()
    const router = useRouter()

    async function handleSubmit() {
        await generateDocument(`/students/documents/declarations/financial/${student._id}?month=${month}`, `Declaração financeira do aluno(a) ${student.name}.pdf`)
        
        await router.push('/admin/documents/declarations')

        toast('Declaração gerada com sucesso!', {
            type: 'success'
        })
    }
    
    return <>
        <Head>
            <title>Gerar declaração</title>
        </Head>
        <ContainerDefault back="/admin/documents/declarations">
            <Title>Gerar declaração</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                {students ? <>
                    <Select
                        name="student"
                        onChange={({ value: student }) => setValue('student', student)}
                        options={students && students.map(student => ({
                            value: student,
                            label: student.name
                        }))}
                    />
                    <Field>
                        <Label>Adimplente até o Mês: </Label>
                        <Input
                            required
                            placeholder="Mês..."
                            {...register('month')}
                        />
                    </Field>
                    <ButtonSubmit loading onClick={handleSubmit} disabled={!student} title="Gerar"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default Documents

export const getServerSideProps = getServerSidePropsAuthAdmin