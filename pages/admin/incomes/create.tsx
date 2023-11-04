import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, Form, Field, Label, CurrencyInput } from '../../../styles/pages/admin/incomes/create'
import Select from '../../../components/Select'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import IClass from '../../../types/class'
import base from '../../../services/api/base'
import { useRouter } from 'next/router'
import IIncome from '../../../types/income'

type IIncomeForForm = Omit<IIncome, '_id' | 'created' | 'student' | 'valueRaw'>

interface IForm extends IIncomeForForm {
    student: string
}

const methods = [
    {
        label: 'Pix',
        value: 'Pix'
    },
    {
        label: 'Crédito',
        value: 'Crédito'
    },
    {
        label: 'Débito',
        value: 'Débito'
    },
    {
        label: 'Físico',
        value: 'Físico'
    },
    {
        label: 'Transação bancaria',
        value: 'Transação bancaria'
    },
    {
        label: 'Boleto',
        value: 'Boleto'
    }
]

const categories = [
    {
        label: 'Mensalidade',
        value: 'Mensalidade'
    },
    {
        label: 'Fardamento',
        value: 'Fardamento'
    },
    {
        label: 'Matrícula',
        value: 'Matrícula'
    },
    {
        label: 'Eventos',
        value: 'Eventos'
    },
    {
        label: 'Livros',
        value: 'Livros'
    },
    {
        label: 'Outros',
        value: 'Outros'
    }
]

function CreateStudent() {
    const router = useRouter()
    const { data: students } = api.get<IStudent[]>('/students')
    const { register, handleSubmit, setValue } = useForm<IForm>()

    async function onSubmit(data: IForm) {
        const { billingDate, category, payDate, payMethod, student, value } = data

        const { created }: { created: boolean } = (await base.post('/incomes', {
            value,
            student,
            category,
            payMethod,
            payDate: new Date(payDate).toLocaleDateString('pt-br', { timeZone: 'UTC' }),
            billingDate: new Date(billingDate).toLocaleDateString('pt-br', { timeZone: 'UTC' })
        } as IForm)).data

        if (created) {
            toast('Receita cadastrada com sucesso!', {
                type: 'success'
            })

            router.push('/admin/incomes')
        } else {
            toast('Houve um erro ao cadastrar a receita', {
                type: 'error'
            })
        }
    }
    
    return <>
        <Head>
            <title>Cadastrar receita</title>
        </Head>
        <ContainerDefault back="/admin/incomes">
            <Title>Cadastrar receita</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field>
                    <Label>Aluno</Label>
                    <Select
                        required
                        name="student"
                        onChange={({ value: student }) => setValue('student', student)}
                        options={students && students.map(student => ({
                            value: student,
                            label: student.name
                        }))}
                    />
                </Field>
                <Field>
                    <Label>Valor</Label>
                    <CurrencyInput
                        required
                        {...register('value')}
                        placeholder="Valor da receita..."
                        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    />
                </Field>
                <Field>
                    <Label>Dia da cobrança</Label>
                    <Input
                        required
                        type="date"
                        {...register('billingDate')}
                        placeholder="Dia da cobrança..."
                    />
                </Field>
                <Field>
                    <Label>Dia do pagamento</Label>
                    <Input
                        required
                        type="date"
                        {...register('payDate')}
                        placeholder="Dia do pagamento..."
                    />
                </Field>
                <Field>
                    <Label>Método</Label>
                    <Select
                        required
                        name="payMethod"
                        options={methods}
                        placeholder="Método de pagamento..."
                        onChange={({ value: method }) => setValue('payMethod', method)}
                    />
                </Field>
                <Field>
                    <Label>Categoria</Label>
                    <Select
                        required
                        name="payMethod"
                        options={categories}
                        placeholder="Categoria da receita..."
                        onChange={({ value: category }) => setValue('category', category)}
                    />
                </Field>
                <ButtonSubmit title="Cadastrar"/>
            </Form>
        </ContainerDefault>
    </>
}

export default CreateStudent

export const getServerSideProps = getServerSidePropsAuthAdmin