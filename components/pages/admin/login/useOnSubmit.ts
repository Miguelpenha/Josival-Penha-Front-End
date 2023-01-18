import useAuth from '../../../../contexts/authContext'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'

interface IForm {
    login: {
        value: string
    }
    password: {
        value: string
    }
}

function useOnSubmit() {
    const { admin: { loginLocal } } = useAuth()
    const router = useRouter()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const { login, password } = event.currentTarget as unknown as IForm

        if (!login.value.endsWith('@josivalpenha.com')) {
            toast('Somente emails da organização são permitidos', {
                type: 'error'
            })
        } else {
            const { authenticated } = await loginLocal(login.value, password.value)

            if (authenticated) {
                toast('Login feito com sucesso', {
                    type: 'success'
                })

                router.push('/admin')
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