import useLocalLogin from '../../components/useLocalLogin'
import Head from 'next/head'
import { Container, Title, Form, Field, Label } from '../../styles/pages/login/type'
import Input from '../../components/Input'
import ButtonSubmit from '../../components/ButtonSubmit'
import nookies from 'nookies'

function LoginType() {
    const localLogin = useLocalLogin()

    return <>
        <Head>
            <title>Login</title>
        </Head>
        <Container>
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
        </Container>
    </>
}

export default LoginType

export const getServerSideProps = async (ctx: any) => {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:admin } = nookies.get(ctx)

    if (admin) {
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