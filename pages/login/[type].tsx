import useOnSubmit from '../../components/pages/login/type/useOnSubmit'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Input, ButtonSubmit, TextButtonSubmit } from '../../styles/pages/login/type'
import nookies from 'nookies'

function LoginType() {
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