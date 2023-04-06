import useAuth from '../contexts/authContext'
import api from '../services/api'

interface IResponse {
    login: string
}

function useAdmin() {
    const { adminIndex } = useAuth()
    
    if (adminIndex) {
        const { data } = api.get<IResponse>(`/admin/${adminIndex}`)

        return data?.login
    } else {
        return false
    }
}

export default useAdmin