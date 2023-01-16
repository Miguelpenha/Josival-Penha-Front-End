import Head from 'next/head'
import { Container, Title } from '../../styles/pages/teachers/login'
import nookies from 'nookies'

function Login() {
    return <>
        <Head>
            <title>Login</title>
        </Head>
        <Container>
            <Title>Login</Title>
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