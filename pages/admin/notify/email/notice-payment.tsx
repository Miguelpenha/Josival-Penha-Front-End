import base from '../../../../services/api/base'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Container, Form, Field, Label, Preview } from '../../../../styles/pages/admin/notify/email/notice-payment'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'
import TextArea from '../../../../components/TextArea'
import api from '../../../../services/api'

interface IForm {
    to: string
    text: string
    title: string
    action: {
        text: string
        link: string
    }
}

const defaultForm = {
    title: 'Problemas com os últimos pagamentos 😓',
    action: {
        text: 'Fale conosco',
        link: 'https://api.whatsapp.com/send?phone=558194997501'
    },
    text: `Olá, vimos que você deve problemas nós seus últimos pagamentos.
Para quitar esses pagamentos, entre em contato conosco pelo botão abaixo 😉`
}

function NoticePayment() {
    const router = useRouter()
    const { watch, register } = useForm<IForm>({
        defaultValues: defaultForm
    })
    const { to, text, title, action } = watch()
    const { data, mutate } = api.post('/notify/email/preview', { text, title, action: { text: action.text, link: action.link } })

    useEffect(() => {
        mutate()
    }, [text, title, action.text, action.link])

    async function handleSubmit() {
        await base.post(`/notify/email/send/${to}`, {
            text,
            title,
            action
        })
        
        await router.push('/admin/notify')

        toast('Aviso enviado com sucesso!', {
            type: 'success'
        })
    }
    
    return <>
        <Head>
            <title>Enviar aviso de pagamento</title>
        </Head>
        <ContainerDefault back="/admin/notify/email">
            <Title>Enviar aviso de pagamento</Title>
            <Container>
                <Form onSubmit={ev => ev.preventDefault()}>
                    <Field>
                        <Label>E-mail do destinatário</Label>
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
                            defaultValue="Problemas com os últimos pagamentos 😓"
                        />
                    </Field>
                    <Field maxWidth>
                        <Label>Texto do aviso</Label>
                        <TextArea
                            rows={8}
                            required
                            {...register('text')}
                            placeholder="Texto..."
                            defaultValue="Olá, vimos que você deve problemas nós seus últimos pagamentos.\nPara quitar esses pagamentos, entre em contato conosco pelo botão abaixo 😉"
                        />
                    </Field>
                    <Field>
                        <Label>Título do botão</Label>
                        <Input
                            required
                            placeholder="Título..."
                            {...register('action.text')}
                        />
                    </Field>
                    <Field>
                        <Label>Link do botão</Label>
                        <Input
                            required
                            type="url"
                            placeholder="Link..."
                            {...register('action.link')}
                            defaultValue="https://api.whatsapp.com/send?phone=558194997501"
                        />
                    </Field>
                    <ButtonSubmit loading onClick={handleSubmit} disabled={!to || !text || !title || !action.text || !action.link} title="Enviar"/>
                </Form>
                <Preview dangerouslySetInnerHTML={{ __html: data as string }}/>
            </Container>
        </ContainerDefault>
    </>
}

export default NoticePayment

export const getServerSideProps = getServerSidePropsAuthAdmin