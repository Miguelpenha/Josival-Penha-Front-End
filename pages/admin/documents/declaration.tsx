import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useState, FormEvent } from 'react'
import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title, Form, Field, Label } from '../../../styles/pages/admin/documents/declaration'
import Select from '../../../components/Select'
import Input from '../../../components/Input'
import Switch from '../../../components/Switch'
import ButtonSubmit from '../../../components/ButtonSubmit'
import generateDocument from '../../../components/generateDocument'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

interface IForm {
    frequencyPercentage: {
        value: string
    }
}

function Documents() {
    const { data: students } = api.get<IStudent[]>('/students')
    const [isScholarship, setIsScholarship] = useState(false)
    const [studentSelect, setStudentSelect] = useState<IStudent>()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const { frequencyPercentage } = event.currentTarget as unknown as IForm

        await generateDocument(`/students/documents/declaration/${studentSelect?._id}?frequencyPercentage=${frequencyPercentage.value}&scholarshipStudent=${isScholarship}`, `Declaração de frequência do aluno(a) ${studentSelect?.name}.pdf`)
    }
    
    return <>
        <Head>
            <title>Gerar declaração</title>
        </Head>
        <ContainerPD>
            <Title>Gerar declaração</Title>
            <Form onSubmit={onSubmit}>
                <Select
                    name="student"
                    onChange={({ value: student }) => setStudentSelect(student)}
                    options={students && students.map(student => ({
                        value: student,
                        label: student.name
                    }))}
                />
                <Field>
                    <Label>Porcentagem de frequência</Label>
                    <Input required id="frequencyPercentage" name="frequencyPercentage" type="number" defaultValue="98" placeholder="Frequência..."/>
                </Field>
                <Switch
                    label="Bolsista"
                    checked={isScholarship}
                    onChange={checked => setIsScholarship(checked)}
                />
                <ButtonSubmit disabled={!studentSelect} title="Gerar"/>
            </Form>
        </ContainerPD>
    </>
}

export default Documents

export const getServerSideProps = getServerSidePropsAuthAdmin