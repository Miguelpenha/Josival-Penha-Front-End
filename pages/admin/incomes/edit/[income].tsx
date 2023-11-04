import api from '../../../../services/api'
import { IStudent } from '../../../../types'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import ContainerDefault from '../../../../components/ContainerDefault'
import { Title, Form, Field, Label, CurrencyInput } from '../../../../styles/pages/admin/incomes/edit'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'
import { toast } from 'react-toastify'
import base from '../../../../services/api/base'
import { useRouter } from 'next/router'
import IIncome from '../../../../types/income'
import categories from '../../../../utils/categoriesIncome'
import methods from '../../../../utils/methodsIncome'

type IIncomeForForm = Omit<IIncome, '_id' | 'created' | 'student' | 'valueRaw'>

interface IForm extends IIncomeForForm {
    student: string
}

function EditIncome() {
    const router = useRouter()
    const { data: income } = api.get<IIncome>(`/incomes/${router.query.income}?student=true`)
    const { data: students } = api.get<IStudent[]>('/students')
    const { register, handleSubmit, setValue } = useForm<IForm>()

    async function onSubmit(data: IForm) {
        const { billingDate, category, payDate, payMethod, student, value } = data

        const { edited }: { edited: boolean } = (await base.patch(`/incomes/${income?._id}`, {
            value,
            student,
            category,
            payMethod,
            payDate: new Date(payDate).toLocaleDateString('pt-br', { timeZone: 'UTC' }),
            billingDate: new Date(billingDate).toLocaleDateString('pt-br', { timeZone: 'UTC' })
        } as IForm)).data

        if (edited) {
            toast('Receita editada', {
                type: 'info'
            })

            router.push('/admin/incomes')
        } else {
            toast('Houve um erro ao editar a receita', {
                type: 'error'
            })
        }
    }
    
    return <>
        <Head>
            <title>Editar receita</title>
        </Head>
        <ContainerDefault back="/admin/incomes">
            <Title>Editar receita</Title>
            {students && income && (
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Field>
                        <Label>Aluno</Label>
                        <Select
                            required
                            name="student"
                            onChange={({ value: student }) => setValue('student', student)}
                            defaultValue={{ label: income.student.name, value: income.student._id }}
                            options={students.map(student => ({
                                value: student._id,
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
                            defaultValue={String(income.valueRaw).slice(0, -2)+','+String(income.valueRaw).slice(-2)}
                        />
                    </Field>
                    <Field>
                        <Label>Dia da cobrança</Label>
                        <Input
                            required
                            type="date"
                            {...register('billingDate')}
                            placeholder="Dia da cobrança..."
                            defaultValue={`${income.billingDate.split('/')[2]}-${income.billingDate.split('/')[1]}-${income.billingDate.split('/')[0]}`}
                        />
                    </Field>
                    <Field>
                        <Label>Dia do pagamento</Label>
                        <Input
                            required
                            type="date"
                            {...register('payDate')}
                            placeholder="Dia do pagamento..."
                            defaultValue={`${income.payDate.split('/')[2]}-${income.payDate.split('/')[1]}-${income.payDate.split('/')[0]}`}
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
                            defaultValue={{ label: income.payMethod, value: income.payMethod }}
                        />
                    </Field>
                    <Field>
                        <Label>Categoria</Label>
                        <Select
                            required
                            name="payMethod"
                            options={categories}
                            placeholder="Categoria da receita..."
                            defaultValue={{ label: income.category, value: income.category }}
                            onChange={({ value: category }) => setValue('category', category)}
                        />
                    </Field>
                    <ButtonSubmit title="Editar"/>
                </Form>
            )}
        </ContainerDefault>
    </>
}

export default EditIncome

export const getServerSideProps = getServerSidePropsAuthAdmin