import { Dispatch, SetStateAction } from 'react'
import { parseCookies } from 'nookies'

function useLoad(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    async function load() {
        const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:teacherID,[process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:adminIndex } = parseCookies()

        if (teacherID) {
            setTeacherID(teacherID)
        } else if (adminIndex) {
            setAdminIndex(Number(adminIndex))
        }
    }

    return load
}

export default useLoad