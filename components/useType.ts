import { ITypeLogin } from '../types'
import useAuth from '../contexts/authContext'

function useType(): ITypeLogin | false {
    const { adminIndex, teacherID } = useAuth()

    if (adminIndex) {
        return 'admin'
    } else if (teacherID) {
        return 'teacher'
    } else {
        return false
    }
}

export default useType