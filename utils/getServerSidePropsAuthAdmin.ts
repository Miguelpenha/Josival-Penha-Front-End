import nookies from 'nookies'

async function getServerSidePropsAuthAdmin(ctx: any) {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:indexAdmin } = nookies.get(ctx)

    if (indexAdmin) {
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