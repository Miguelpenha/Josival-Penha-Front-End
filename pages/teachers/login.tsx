import useOnSubmit from '../../components/pages/teachers/login/useOnSubmit'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Input, ButtonSubmit, TextButtonSubmit } from '../../styles/pages/teachers/login'
import nookies from 'nookies'

function Login() {
    const onSubmit = useOnSubmit()

    return <>
        <Head>
            <title>Login</title>
        </Head>
        <Container>
            <Title>Login</Title>
            <Form id="login" onSubmit={onSubmit}>
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
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher } = nookies.get(ctx)

    if (idTeacher) {
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