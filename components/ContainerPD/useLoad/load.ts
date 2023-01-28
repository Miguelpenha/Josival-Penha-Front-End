import { Dispatch, SetStateAction } from 'react'
import api from '../../../services/api/base'

async function load(setLoading: Dispatch<SetStateAction<boolean>>) {
    try {
        await api.get('/teachers?count=true')

        setLoading(true)
    } catch {
        setLoading(false)
    }
}

export default load