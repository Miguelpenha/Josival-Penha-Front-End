import nookies from 'nookies'

async function getServerSidePropsAuth(ctx: any) {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher } = nookies.get(ctx)

    if (idTeacher) {
        return {
            props: {  }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/teachers/sign'
            }
        }
    }
}

export default getServerSidePropsAuth