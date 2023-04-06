import useAuth from '../contexts/authContext'
import api from '../services/api'
import ITeacher from '../types/teacher'

function useTeacher() {
    const { teacherID } = useAuth()

    if (teacherID) {
        const { data } = api.get<ITeacher>(`/teachers/${teacherID}`)

        return data?.name
    } else {
        return false
    }
}

export default useTeacher