import base from '../../../../services/api/base'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../../../styles/pages/admin/notify/email/notice'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'
import TextArea from '../../../../components/TextArea'

interface IForm {
    to: string
    text: string
    title: string
}

function Notice() {
    const router = useRouter()
    const { watch, register } = useForm<IForm>()
    const { to, text, title } = watch()

    async function handleSubmit() {
        await base.post(`/notify/email/${to}`, {
            text,
            title
        })
        
        await router.push('/admin/notify')

        toast('Aviso enviado com sucesso!', {
            type: 'success'
        })
    }
    
    return <>
        <Head>
            <title>Mandar aviso</title>
        </Head>
        <ContainerDefault back="/admin/notify/email">
            <Title>Enviar aviso</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                <Field>
                    <Label>E-mail do aluno</Label>
                    <Input
                        required
                        {...register('to')}
                        placeholder="E-mail..."
                    />
                </Field>
                <Field>
                    <Label>Título do aviso</Label>
                    <Input
                        required
                        {...register('title')}
                        placeholder="Título..."
                    />
                </Field>
                <Field maxWidth>
                    <Label>Texto do aviso</Label>
                    <TextArea
                        rows={8}
                        required
                        {...register('text')}
                        placeholder="Texto..."
                    />
                </Field>
                <ButtonSubmit loading onClick={handleSubmit} disabled={!to || !text || !title} title="Enviar"/>
            </Form>
        </ContainerDefault>
    </>
}

export default Notice

export const getServerSideProps = getServerSidePropsAuthAdmin