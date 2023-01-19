import nookies from 'nookies'

async function getServerSidePropsAuthAdmin(ctx: any) {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:isAdmin } = nookies.get(ctx)

    if (isAdmin) {
        return {
            props: {  }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/sign/admin'
            }
        }
    }
}

export default getServerSidePropsAuthAdmin