import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import generateDocument from '../../../components/generateDocument'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../../styles/pages/admin/documents/declaration'
import Select from '../../../components/Select'
import Input from '../../../components/Input'
import Switch from '../../../components/Switch'
import ButtonSubmit from '../../../components/ButtonSubmit'
import Loading from '../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    student: IStudent
    frequency: string
    isScholarship: boolean
}

function Documents() {
    const { data: students } = api.get<IStudent[]>('/students')
    const { watch, setValue, register } = useForm<IForm>()
    const { student, frequency, isScholarship } = watch()
    const router = useRouter()

    async function handleSubmit() {
        await generateDocument(`/students/documents/declaration/${student._id}?frequencyPercentage=${frequency}&scholarshipStudent=${isScholarship}`, `Declaração de frequência do aluno(a) ${student.name}.pdf`)
        
        await router.push('/admin/documents')

        toast('Declaração gerada com sucesso!', {
            type: 'success'
        })
    }
    
    return <>
        <Head>
            <title>Gerar declaração</title>
        </Head>
        <ContainerDefault back="/admin/documents">
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
                        <Label>Porcentagem de frequência</Label>
                        <Input
                            min="0"
                            required
                            max="100"
                            type="number"
                            defaultValue="98"
                            {...register('frequency')}
                            placeholder="Frequência..."
                        />
                    </Field>
                    <Switch
                        label="Bolsista"
                        checked={isScholarship}
                        onChange={checked => setValue('isScholarship', checked)}
                    />
                    <ButtonSubmit loading onClick={handleSubmit} disabled={!student} title="Gerar"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default Documents

export const getServerSideProps = getServerSidePropsAuthAdmin