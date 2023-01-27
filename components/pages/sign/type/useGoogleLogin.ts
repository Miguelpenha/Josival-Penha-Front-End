import useAuth from '../../../../contexts/authContext'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

function useGoogleLogin(type: 'admin' | 'teacher') {
    const { admin: { loginGoogle: loginGoogleAdmin }, teacher: { loginGoogle: loginGoogleTeacher } } = useAuth()
    const router = useRouter()

    const login = type === 'admin' ? loginGoogleAdmin : loginGoogleTeacher

    function googleLogin() {
        google.accounts.id.initialize({
            auto_select: true,
            ux_mode: 'redirect',
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: async (res: any) => {
                const { authenticated } = await login(res.credential)
    
                if (authenticated) {
                    router.push(type === 'admin' ? '/admin' : '/teachers')
    
                    toast('Login feito com sucesso', {
                        type: 'success'
                    })
                }
            }
        })
    
        google.accounts.id.prompt()
    }

    return googleLogin
}

export default useGoogleLogin