import useAdmin from '../components/useAdmin'
import useTeacher from '../components/useTeacher'
import useLogout from '../components/useLogout'
import { toast } from 'react-toastify'
import Head from 'next/head'
import ContainerDefault from '../components/ContainerDefault'
import { Title, Field, Label, Data, ButtonLogout } from '../styles/pages/settings'
import Loading from '../components/Loading'
import nookies from 'nookies'

function Settings() {
    const admin = useAdmin()
    const teacher = useTeacher()
    const logout = useLogout()

    async function handleCopy(value: string | false | undefined) {
        if (value) {
            await window.navigator.clipboard.writeText(value)
      
            toast('Dado copiado', {
              type: 'info'
            })
        }
    }
    
    return <>
        <Head>
            <title>Configurações</title>
        </Head>
        <ContainerDefault back={admin ? '/admin' : '/teacher'}>
            <Title>Configurações</Title>
            {(admin || teacher) ? <>
                <Field>
                    <Label>Logado como </Label>
                    <Data onClick={async () => await handleCopy(admin || teacher)}>{admin || teacher}</Data>
                </Field>
                <ButtonLogout title="Logout" onClick={logout}>
                    <svg width="2.3em" height="2.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                    </svg>
                </ButtonLogout>
            </> : <Loading size={90} weight={8} speed={0.8}/>}
        </ContainerDefault>
    </>
}

export default Settings

export const getServerSideProps = async (ctx: any) => {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:indexAdmin } = nookies.get(ctx)

    if (indexAdmin || idTeacher) {
        return {
            props: {  }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            }
        }
    }
}