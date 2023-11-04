import api from '../../../services/api'
import IIncome from '../../../types/income'
import { useState } from 'react'
import Head from 'next/head'
import ContainerDefault from '../../../components/ContainerDefault'
import { Title, ContainerIncomes, Income, IncomeField } from '../../../styles/pages/admin/incomes'
import InputSearch from '../../../components/InputSearch'
import ButtonLink from '../../../components/ButtonLink'
import Loading from '../../../components/Loading'
import getServerSidePropsAuthAdmin from '../../../utils/getServerSidePropsAuthAdmin'

function Incomes() {
    const { data: incomes } = api.get<IIncome[]>('/incomes?student=true')
    const [search, setSearch] = useState('')

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
                    <IncomeField bold width={20}>Aluno</IncomeField>
                    <IncomeField bold>Valor</IncomeField>
                    <IncomeField bold>Pagamento</IncomeField>
                </Income>
                {incomes ? incomes.map((income, index) => {
                    if (income.student.name.toUpperCase().includes(search.toUpperCase())) {
                        return (
                            <Income key={index}>
                                <IncomeField width={20}>{income.student.name}</IncomeField>
                                <IncomeField>{income.value}</IncomeField>
                                <IncomeField>{income.payDate}</IncomeField>
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