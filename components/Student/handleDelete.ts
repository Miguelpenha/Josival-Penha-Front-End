import { IStudent } from '../../types'
import api from '../../services/api/base'
import { toast } from 'react-toastify'

async function handleDelete(student: IStudent) {
    await api.delete(`/students/${student._id}`)

    toast('Aluno deletado', {
        type: 'error'
    })
}

export default handleDelete