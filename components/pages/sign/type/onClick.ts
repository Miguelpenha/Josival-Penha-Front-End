import { IAuthContext } from '../../../../contexts/authContext/type'

function onClick(login: IAuthContext['admin']['loginGoogle'] | IAuthContext['teacher']['loginGoogle']) {
    google.accounts.id.initialize({
        auto_select: true,
        ux_mode: 'redirect',
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: async (res: any) => {
            const { authenticated } = await login(res.credential)

            if (authenticated) {
                window.location.reload()
            }
        }
    })

    google.accounts.id.prompt()
}

export default onClick