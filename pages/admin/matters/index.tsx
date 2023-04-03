import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, Form, ButtonSubmit } from '../../../styles/pages/admin/matters'
import Select from '../../../components/Select'
import Loading from '../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    student: string
}

function Matters() {
    const { data: students } = api.get<IStudent[]>('/students')
    const { watch, setValue } = useForm<IForm>()
    const router = useRouter()
    const { student } = watch()

    async function handleSubmit() {
        await router.push(`/admin/matters/${student}`)
    }
    
    return <>
        <Head>
            <title>Ver notas</title>
        </Head>
        <ContainerDefault back="/admin">
            <Title>Ver notas</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                {students ? <>
                    <Select
                        name="student"
                        onChange={({ value: student }) => setValue('student', student)}
                        options={students && students.map(student => ({
                            value: student._id,
                            label: student.name
                        }))}
                    />
                    <ButtonSubmit onClick={handleSubmit} disabled={!student} title="Ver"/>
                </> : <Loading size={90} weight={8} speed={0.8}/>}
            </Form>
        </ContainerDefault>
    </>
}

export default Matters

export const getServerSideProps = getServerSidePropsAuthAdmin