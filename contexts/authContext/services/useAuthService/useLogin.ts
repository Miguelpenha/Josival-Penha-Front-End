import { Dispatch, SetStateAction } from 'react'
import { IRequest, IType } from './type'
import loginService from './login'

function useLogin(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    async function loginAdmin(body: IRequest, type: IType) {
        return await loginService(body, `/admin/auth/login/${type}`, setAdminIndex, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN)
    }

    async function loginTeacher(body: IRequest, type: IType) {
        return await loginService(body, `/teachers/auth/login/${type}`, setTeacherID, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER)
    }

    return {
        loginAdmin,
        loginTeacher
    }
}

export default useLogin