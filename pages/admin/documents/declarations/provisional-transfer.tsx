import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import generateDocument from '../../../../components/generateDocument'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../../../styles/pages/admin/documents/declarations/frequency'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'
import Switch from '../../../../components/Switch'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import Loading from '../../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    student: IStudent
    nextClass: string
    progression: boolean
}

function Documents() {
    const { data: students } = api.get<IStudent[]>('/students')
    const { watch, setValue, register } = useForm<IForm>({ defaultValues: { progression: true } })
    const { student, nextClass, progression } = watch()
    const router = useRouter()

    async function handleSubmit() {
        await generateDocument(`/students/documents/declarations/provisional-transfer/${student._id}?nextClass=${nextClass}&progression=${progression}`, `Declaração provisória de transferência do aluno(a) ${student.name}.pdf`)
        
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
                        <Label>Nome da futura turma do aluno</Label>
                        <Input
                            required
                            {...register('nextClass')}
                            placeholder="Turma da outra escola..."
                        />
                    </Field>
                    <Switch
                        checked={progression}
                        label="Progressão Plena"
                        onChange={checked => setValue('progression', checked)}
                    />
                    <ButtonSubmit loading onClick={handleSubmit} disabled={!student || !nextClass} title="Gerar"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default Documents

export const getServerSideProps = getServerSidePropsAuthAdmin