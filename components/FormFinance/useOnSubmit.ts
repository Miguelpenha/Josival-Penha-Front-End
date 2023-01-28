import { FormEvent } from 'react'
import { toast } from 'react-toastify'

function useOnSubmit(onCorrect: () => void) {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        if (event.currentTarget.password.value === process.env.NEXT_PUBLIC_PASSWORD_FINANCE) {
            onCorrect()

            toast('Senha correta', {
                type: 'success'
            })
        } else {
            toast('Senha incorreta', {
                type: 'error'
            })
        }
    
        event.preventDefault()
    }

    return onSubmit
}

export default useOnSubmit