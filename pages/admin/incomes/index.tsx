import api from '../../../services/api'
import IIncome from '../../../types/income'
import { useState } from 'react'
import apiBase from '../../../services/api/base'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, ContainerIncomes, Income, Fields, IncomeField, Options, OptionLink, OptionButton } from '../../../styles/pages/admin/incomes'
import ButtonLink from '../../../components/ButtonLink'
import InputSearch from '../../../components/InputSearch'
import Loading from '../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Incomes() {
    const { data: incomes, mutate } = api.get<IIncome[]>('/incomes?student=true')
    const [search, setSearch] = useState('')

    async function handleDelete(income: IIncome) {
        await apiBase.delete(`/incomes/${income._id}`)

        toast('Receita deletada', {
            type: 'error'
        })

        mutate()
    }

    return <>
        <Head>
            <title>Receitas</title>
        </Head>
        <ContainerDefault back="/admin">
            <Title>Receitas</Title>
            <ButtonLink href="incomes/create" title="Cadastrar">
                <svg width="2.8em" height="2.8em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            </ButtonLink>
            <InputSearch value={search} onChange={ev => setSearch(ev.target.value)} placeholder="Pesquisar receita..."/>
            <ContainerIncomes>
                <Income>
                    <Fields>
                        <IncomeField bold width={20}>Aluno</IncomeField>
                        <IncomeField bold>Valor</IncomeField>
                        <IncomeField bold>Pagamento</IncomeField>
                    </Fields>
                </Income>
                {incomes ? incomes.map((income, index) => {
                    if (income.student.name.toUpperCase().includes(search.toUpperCase())) {
                        return (
                            <Income key={index}>
                                <Fields>
                                    <IncomeField width={20}>{income.student.name}</IncomeField>
                                    <IncomeField bold>{income.value}</IncomeField>
                                    <IncomeField>{income.payDate}</IncomeField>
                                </Fields>
                                <Options>
                                    <OptionLink href={`incomes/edit/${income._id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                        </svg>
                                    </OptionLink>
                                    <OptionButton onClick={async () => await handleDelete(income)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                        </svg>
                                    </OptionButton>
                                </Options>
                            </Income>
                        )
                    }
                }) : <Loading size={90} weight={8} speed={0.8}/>}
            </ContainerIncomes>
        </ContainerDefault>
    </>
}

export default Incomes

export const getServerSideProps = getServerSidePropsAuthAdmin