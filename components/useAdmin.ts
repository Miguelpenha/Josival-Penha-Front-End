import { parseCookies } from 'nookies'
import api from '../services/api'

interface IResponse {
    login: string
}

function useAdmin() {
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:adminIndex } = parseCookies()

    const { data } = api.get<IResponse>(`/admin/${adminIndex}`)

    return data?.login
}

export default useAdmin