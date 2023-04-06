import useType from './useType'
import useAuth from '../contexts/authContext'
import { useRouter } from 'next/router'

function useLogout() {
    const type = useType()
    const { admin: { logout: logoutAdmin }, teacher: { logout: logoutTeacher } } = useAuth()
    const router = useRouter()

    async function logout() {
        (type == 'admin' ? logoutAdmin() : logoutTeacher()).then(async () => {
            await router.replace('/')
        })
    }

    return logout
}

export default useLogout