import useAuth from '../../../../contexts/authContext'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'

interface IQuery {
    type: 'admin' | 'teacher'
}

interface IForm {
    login: {
        value: string
    }
    password: {
        value: string
    }
}

function useOnSubmit() {
    const { admin: { loginLocal: loginLocalAdmin }, teacher: { loginLocal: loginLocalTeacher } } = useAuth()
    const router = useRouter()
    const { type } = router.query as unknown as IQuery

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const { login, password } = event.currentTarget as unknown as IForm

        if (!login.value.endsWith('@josivalpenha.com')) {
            toast('Somente emails da organização são permitidos', {
                type: 'error'
            })
        } else {
            const { authenticated } = type === 'admin' ? await loginLocalAdmin(login.value, password.value) : await loginLocalTeacher(login.value, password.value)

            if (authenticated) {
                toast('Login feito com sucesso', {
                    type: 'success'
                })

                router.push(type === 'admin' ? '/admin' : '/teachers')
            } else {
                toast('Login ou senha incorretos', {
                    type: 'error'
                })
            }
        }
    }

    return onSubmit
}

export default useOnSubmit