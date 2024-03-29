import { useRouter } from 'next/router'
import useGoogleLogin from '../../components/useGoogleLogin'
import Head from 'next/head'
import Script from 'next/script'
import ContainerDefault from '../../components/ContainerDefault'
import { Title } from '../../styles/pages/sign/type'
import Button from '../../components/Button'
import ButtonLink from '../../components/ButtonLink'
import nookies from 'nookies'

interface IQuery {
    type: 'admin' | 'teacher'
}

function SignType() {
    const { type } = useRouter().query as unknown as IQuery
    const googleLogin = useGoogleLogin(type)

    return <>
        <Head>
            <title>Sign</title>
        </Head>
        <Script src="https://accounts.google.com/gsi/client" async defer/>
        <ContainerDefault back="/">
            <Title>Escolha a forma de login</Title>
            <Button title="Login com Google" onClick={googleLogin}>
                <svg viewBox="64 64 896 896" width="2.1em" height="2.1em">
                    <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"/>
                </svg>
            </Button>
            <ButtonLink title="Usar login e senha" href={`/login/${type}`}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" width="2.1em" height="2.1em" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/>
                    </g>
                </svg>
            </ButtonLink>
        </ContainerDefault>
    </>
}

export default SignType

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