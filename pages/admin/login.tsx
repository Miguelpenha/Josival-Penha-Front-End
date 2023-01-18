import useOnSubmit from '../../components/pages/admin/login/useOnSubmit'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Input, ButtonSubmit, TextButtonSubmit } from '../../styles/pages/admin/login'
import nookies from 'nookies'

function Login() {
    const onSubmit = useOnSubmit()

    return <>
        <Head>
            <title>Login</title>
        </Head>
        <Container>
            <Title>Login</Title>
            <Form id="form-login" onSubmit={onSubmit}>
                <Field>
                    <Label>Login</Label>
                    <Input id="login" name="login" type="email" placeholder="Login" required/>
                </Field>
                <Field>
                    <Label>Senha</Label>
                    <Input id="password" name="password" type="password" placeholder="Senha" required/>
                </Field>
                <ButtonSubmit type="submit">
                    <TextButtonSubmit>Confirmar</TextButtonSubmit>
                </ButtonSubmit>
            </Form>
        </Container>
    </>
}

export default Login

export const getServerSideProps = async (ctx: any) => {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:isAdmin } = nookies.get(ctx)

    if (isAdmin) {
        return {
            redirect: {
                permanent: false,
                destination: '/admin'
            }
        }
    } else {
        return {
            props: {  }
        }
    }
}