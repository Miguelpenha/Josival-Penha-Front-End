import useType from './useType'
import useAuth from '../contexts/authContext'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'

function useLogout() {
    const type = useType()
    const { admin: { logout: logoutAdmin }, teacher: { logout: logoutTeacher } } = useAuth()
    const router = useRouter()

    async function logout() {
        if (type == 'admin') {
            await logoutAdmin()
        } else if (type == 'teacher') {
            await logoutTeacher()
        }

        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN, {
            path: '/'
        })
        
        // await router.replace('/')
    }

    return logout
}

export default useLogout