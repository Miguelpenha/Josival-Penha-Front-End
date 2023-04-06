import { Dispatch, SetStateAction } from 'react'
import { destroyCookie, } from 'nookies'

async function logout(setValue: Dispatch<SetStateAction<any>>, item: string) {
    setValue(null)

    console.log('logout feito', item)

    destroyCookie(undefined, item)
}

export default logout