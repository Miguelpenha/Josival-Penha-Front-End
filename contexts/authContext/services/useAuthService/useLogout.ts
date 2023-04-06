import { Dispatch, SetStateAction } from 'react'
import { destroyCookie } from 'nookies'

function useLogout(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    async function logoutAdmin() {
        setAdminIndex(null)
    
        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN)
    }

    async function logoutTeacher() {
        setTeacherID(null)
    
        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER)
    }

    return {
        logoutAdmin,
        logoutTeacher
    }
}

export default useLogout