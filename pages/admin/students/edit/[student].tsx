import api from '../../../../services/api'
import IStudent from '../../../../types/student'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import ContainerPD from '../../../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../../../styles/pages/admin/students/create'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import getServerSidePropsAuthAdmin from '../../../../utils/getServerSidePropsAuthAdmin'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import IClass from '../../../../types/class'
import base from '../../../../services/api/base'
import { useRouter } from 'next/router'
import Loading from '../../../../components/Loading'

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

function EditStudent() {
    const router = useRouter()
    const { data: student } = api.get<IStudent>(`/students/${router.query.student}?class=true&address=true`)
    const { data: students } = api.get<IStudent[]>('/students')
    const { data: classes } = api.get<IClass[]>('/classes')
    const { register, handleSubmit, setValue } = useForm<IForm>()

    useEffect(() => {
        register('gender')
        register('cpf')
        register('situation')
        register('class')
        register('cep')
    }, [])

    async function onSubmit(data: IForm) {
        const names: string[] = []

        students?.map(studentMap => (
            student && studentMap.name != student.name && names.push(studentMap.name.toUpperCase())
        ))

        if (names.includes(data.name.toUpperCase())) {
            toast('Já existe um aluno com esse nome', {
                type: 'error'
            })
        } else {
            const { name, birth, class: classSelect, cpf, email, gender, responsible1, responsible2, situation, telephone, cep, city, complement, neighborhood, number, street } = data

            const { edited }: { edited: boolean } = (await base.patch(`/students/${student && student._id}`, {
                cpf,
                name,
                email,
                gender,
                telephone,
                situation,
                responsible1,
                responsible2,
                class: classSelect,
                birth: `${birth.split('-')[2]}/${birth.split('-')[1]}/${birth.split('-')[0]}`,
                address: {
                    cep,
                    city,
                    street,
                    number,
                    complement,
                    neighborhood
                }
            })).data

            if (edited) {
                toast('Aluno editado com sucesso', {
                    type: 'info'
                })

                router.push('/admin/students')
            } else {
                toast('Houve um erro ao editar o aluno', {
                    type: 'error'
                })
            }
        }
    }

    if (student && students && classes) {
        return <>
            <Head>
                <title>Editar aluno</title>
            </Head>
            <ContainerPD>
                <Title>Editar aluno</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Field>
                        <Label>Nome do aluno</Label>
                        <Input
                            required
                            type="text"
                            {...register('name')}
                            placeholder="Nome do aluno..."
                            defaultValue={student && student.name}
                        />
                    </Field>
                    <Field>
                        <Label>CPF do responsável</Label>
                        <InputMask mask="999.999.999-99" onChange={event => setValue('cpf', event.target.value)}>
                            <Input
                                type="text"
                                placeholder="CPF do aluno..."
                                defaultValue={student && student.cpf}
                            />
                        </InputMask>
                    </Field>
                    <Field>
                        <Label>Data de nascimento do aluno</Label>
                        <Input
                            required
                            type="date"
                            {...register('birth')}
                            defaultValue={student && `${student.birth.split('/')[2]}-${student.birth.split('/')[1]}-${student.birth.split('/')[0]}`}
                        />
                    </Field>
                    <Field>
                        <Label>E-mail do responsável</Label>
                        <Input
                            type="text"
                            {...register('email')}
                            placeholder="E-mail do responsável..."
                            defaultValue={student && student.email}
                        />
                    </Field>
                    <Field>
                        <Label>Gênero do aluno</Label>
                        <Select
                            name="gender"
                            placeholder="Gênero do aluno..."
                            defaultValue={student && student.gender}
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
                            defaultValue={student && student.telephone}
                        />
                    </Field>
                    <Field>
                        <Label>Situação do aluno</Label>
                        <Select
                            name="situation"
                            placeholder="Situação do aluno..."
                            defaultValue={student && student.situation}
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
                            defaultValue={student && student.responsible1}
                        />
                    </Field>
                    <Field>
                        <Label>Segundo responsável</Label>
                        <Input
                            type="text"
                            {...register('responsible2')}
                            placeholder="Segundo responsável..."
                            defaultValue={student && student.responsible2}
                        />
                    </Field>
                    <Field>
                        <Label>Turma do aluno</Label>
                        <Select
                            name="class"
                            placeholder="Turma do aluno..."
                            defaultValue={student && student.class.name}
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
                                defaultValue={student && student.address && student.address.cep}
                            />
                        </InputMask>
                    </Field>
                    <Field>
                        <Label>Cidade do aluno</Label>
                        <Input
                            type="text"
                            {...register('city')}
                            placeholder="Cidade do aluno..."
                            defaultValue={student && student.address && student.address.city}
                        />
                    </Field>
                    <Field>
                        <Label>Bairro do aluno</Label>
                        <Input
                            type="text"
                            {...register('neighborhood')}
                            placeholder="Bairro do aluno..."
                            defaultValue={student && student.address && student.address.neighborhood}
                        />
                    </Field>
                    <Field>
                        <Label>Rua do aluno</Label>
                        <Input
                            type="text"
                            {...register('street')}
                            placeholder="Rua do aluno..."
                            defaultValue={student && student.address && student.address.street}
                        />
                    </Field>
                    <Field>
                        <Label>Número da casa do aluno</Label>
                        <Input
                            type="number"
                            {...register('number')}
                            placeholder="Número da casa do aluno..."
                            defaultValue={student && student.address && student.address.number}
                        />
                    </Field>
                    <Field>
                        <Label>Complemento da casa do aluno</Label>
                        <Input
                            type="text"
                            {...register('complement')}
                            placeholder="Complemento da casa do aluno..."
                            defaultValue={student && student.address && student.address.complement}
                        />
                    </Field>
                    <ButtonSubmit title="Editar"/>
                </Form>
            </ContainerPD>
        </>
    } else {
        <Loading/>
    }
}

export default EditStudent

export const getServerSideProps = getServerSidePropsAuthAdmin