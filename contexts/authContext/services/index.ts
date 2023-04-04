import { Dispatch, SetStateAction } from 'react'
import useLoad from './useLoad'
import useAuthService from './useAuthService'

function useService(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    const load = useLoad(setAdminIndex, setTeacherID)
    const authService = useAuthService(setAdminIndex, setTeacherID)

    return { load, authService }
}

export default useService