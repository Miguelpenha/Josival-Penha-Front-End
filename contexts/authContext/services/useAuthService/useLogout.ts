import { Dispatch, SetStateAction } from 'react'
import logout from './logout'

function useLogout(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    return {
        logoutAdmin: () => logout(setAdminIndex, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN),
        logoutTeacher: () => logout(setTeacherID, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER)
    }
}

export default useLogout