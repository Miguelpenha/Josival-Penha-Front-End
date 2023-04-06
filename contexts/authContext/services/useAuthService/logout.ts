import { Dispatch, SetStateAction } from 'react'
import { destroyCookie } from 'nookies'

async function logout(setValue: Dispatch<SetStateAction<any>>, item: string) {
    setValue(null)

    destroyCookie(undefined, item, {
        path: '/'
    })
}

export default logout