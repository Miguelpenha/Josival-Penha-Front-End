import { useRouter } from 'next/router'
import useLocalLogin from '../../components/useLocalLogin'
import Head from 'next/head'
import ContainerDefault from '../../components/ContainerDefault'
import { Title, Form, Field, Label } from '../../styles/pages/login/type'
import Input from '../../components/Input'
import ButtonSubmit from '../../components/ButtonSubmit'
import nookies from 'nookies'

interface IQuery {
    type: 'admin' | 'teacher'
}

function LoginType() {
    const router = useRouter()
    const { type } = router.query as unknown as IQuery
    const localLogin = useLocalLogin()

    return <>
        <Head>
            <title>Login</title>
        </Head>
        <ContainerDefault back={`/sign/${type}`}>
            <Title>Login</Title>
            <Form id="form-login" onSubmit={localLogin}>
                <Field>
                    <Label>Login</Label>
                    <Input id="login" name="login" type="email" placeholder="Login" required/>
                </Field>
                <Field>
                    <Label>Senha</Label>
                    <Input icon id="password" name="password" placeholder="Senha" required/>
                </Field>
                <ButtonSubmit title="Confirmar" type="submit"/>
            </Form>
        </ContainerDefault>
    </>
}

export default LoginType

export const getServerSideProps = async (ctx: any) => {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:indexAdmin } = nookies.get(ctx)

    if (indexAdmin) {
        return {
            redirect: {
                permanent: false,
                destination: '/admin'
            }
        }
    } else if (idTeacher) {
        return {
            redirect: {
                permanent: false,
                destination: '/teachers'
            }
        }
    } else {
        return {
            props: {  }
        }
    }
}