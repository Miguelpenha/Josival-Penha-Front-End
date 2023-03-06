import api from '../../../services/api'
import IStudent from '../../../types/student'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import ContainerPD from '../../../components/ContainerPD'
import { Title, Form, Field, Label, MessageError } from '../../../styles/pages/admin/students/create'
import Select from '../../../components/Select'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import IClass from '../../../types/class'
import base from '../../../services/api/base'
import { useRouter } from 'next/router'

interface IForm {
    cpf: string
    cep: string
    city: string
    name: string
    birth: string
    email: string
    class: string
    street: string
    number: number
    gender: string
    telephone: string
    situation: string
    complement: string
    responsible1: string
    responsible2: string
    neighborhood: string
}

function CreateStudent() {
    const router = useRouter()
    const { data: students } = api.get<IStudent[]>('/students')
    const { data: classes } = api.get<IClass[]>('/classes')
    const { register, handleSubmit, setValue, watch } = useForm<IForm>()
    const [isExists, setIsExists] = useState(false)

    useEffect(() => {
        register('gender')
        register('cpf')
        register('situation')
        register('class')
        register('cep')
    }, [])

    const nameStudent = watch('name') || ''

    useEffect(() => {
        if (students) {
            let isExistsName = false

            students.map(student => {
                if (student.name.toUpperCase() === nameStudent.toUpperCase()) {
                    isExistsName = true
                }
            })

            if (isExistsName) {
                setIsExists(true)
            } else {
                setIsExists(false)
            }
        }
    }, [nameStudent])

    async function onSubmit(data: IForm) {
        if (isExists) {
            toast('Já existe um aluno com esse nome', {
                type: 'error'
            })
        } else {
            const { name, birth, class: classSelect, cpf, email, gender, responsible1, responsible2, situation, telephone, cep, city, complement, neighborhood, number, street } = data

            const { created }: { created: boolean } = (await base.post('/students', {
                cpf,
                name,
                email,
                gender,
                telephone,
                situation,
                responsible1,
                responsible2,
                class: classSelect,
                birth: new Date(birth).toLocaleDateString('pt-br', { timeZone: 'UTC' }),
                address: {
                    cep,
                    city,
                    street,
                    number,
                    complement,
                    neighborhood
                }
            })).data

            if (created) {
                toast('Aluno cadastrado com sucesso', {
                    type: 'success'
                })

                router.push('/admin/students')
            } else {
                toast('Houve um erro ao cadastrar o aluno', {
                    type: 'error'
                })
            }
        }
    }
    
    return <>
        <Head>
            <title>Cadastrar aluno</title>
        </Head>
        <ContainerPD>
            <Title>Cadastrar aluno</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field>
                    <Label>Nome do aluno</Label>
                    {isExists && <MessageError>Esse aluno já existe</MessageError>}
                    <Input
                        required
                        type="text"
                        {...register('name')}
                        placeholder="Nome do aluno..."
                    />
                </Field>
                <Field>
                    <Label>CPF do responsável</Label>
                    <InputMask mask="999.999.999-99" onChange={event => setValue('cpf', event.target.value)}>
                        <Input
                            required
                            type="text"
                            placeholder="CPF do aluno..."
                        />
                    </InputMask>
                </Field>
                <Field>
                    <Label>Data de nascimento do aluno</Label>
                    <Input
                        required
                        type="date"
                        {...register('birth')}
                    />
                </Field>
                <Field>
                    <Label>E-mail do responsável</Label>
                    <Input
                        type="text"
                        {...register('email')}
                        placeholder="E-mail do responsável..."
                    />
                </Field>
                <Field>
                    <Label>Gênero do aluno</Label>
                    <Select
                        required
                        name="gender"
                        placeholder="Gênero do aluno..."
                        onChange={gender => setValue('gender', gender.value)}
                        options={[
                            {
                                label: 'Masculino',
                                value: 'Masculino'
                            },
                            {
                                label: 'Feminino',
                                value: 'Feminino'
                            }
                        ]}
                    />
                </Field>
                <Field>
                    <Label>Telefone do responsável</Label>
                    <Input
                        type="tel"
                        {...register('telephone')}
                        placeholder="Telefone do responsável..."
                    />
                </Field>
                <Field>
                    <Label>Situação do aluno</Label>
                    <Select
                        name="situation"
                        defaultValue="Ativo"
                        placeholder="Situação do aluno..."
                        onChange={situation => setValue('situation', situation.value)}
                        options={[
                            {
                                label: 'Ativo',
                                value: 'Ativo'
                            },
                            {
                                label: 'Desativo',
                                value: 'Desativo'
                            }
                        ]}
                    />
                </Field>
                <Field>
                    <Label>Primeiro responsável</Label>
                    <Input
                        required
                        type="text"
                        {...register('responsible1')}
                        placeholder="Primeiro responsável..."
                    />
                </Field>
                <Field>
                    <Label>Segundo responsável</Label>
                    <Input
                        type="text"
                        {...register('responsible2')}
                        placeholder="Segundo responsável..."
                    />
                </Field>
                <Field>
                    <Label>Turma do aluno</Label>
                    <Select
                        required
                        name="class"
                        placeholder="Turma do aluno..."
                        onChange={situation => setValue('class', situation.value)}
                        options={classes?.map(classMap => ({
                            value: classMap._id,
                            label: classMap.name
                        }))}
                    />
                </Field>
                <Field>
                    <Label>CEP do aluno</Label>
                    <InputMask mask="99999-999" onChange={event => setValue('cep', event.target.value)}>
                        <Input
                            type="text"
                            placeholder="CEP do aluno..."
                        />
                    </InputMask>
                </Field>
                <Field>
                    <Label>Cidade do aluno</Label>
                    <Input
                        type="text"
                        {...register('city')}
                        placeholder="Cidade do aluno..."
                    />
                </Field>
                <Field>
                    <Label>Bairro do aluno</Label>
                    <Input
                        type="text"
                        {...register('neighborhood')}
                        placeholder="Bairro do aluno..."
                    />
                </Field>
                <Field>
                    <Label>Rua do aluno</Label>
                    <Input
                        type="text"
                        {...register('street')}
                        placeholder="Rua do aluno..."
                    />
                </Field>
                <Field>
                    <Label>Número da casa do aluno</Label>
                    <Input
                        type="number"
                        {...register('number')}
                        placeholder="Número da casa do aluno..."
                    />
                </Field>
                <Field>
                    <Label>Complemento da casa do aluno</Label>
                    <Input
                        type="text"
                        {...register('complement')}
                        placeholder="Complemento da casa do aluno..."
                    />
                </Field>
                <ButtonSubmit title="Cadastrar"/>
            </Form>
        </ContainerPD>
    </>
}

export default CreateStudent

export const getServerSideProps = getServerSidePropsAuthAdmin