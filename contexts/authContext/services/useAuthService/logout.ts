import { Dispatch, SetStateAction } from 'react'
import nookies from 'nookies'

async function logout(setValue: Dispatch<SetStateAction<any>>, item: string) {
    setValue(null)

    console.log('logout feito', item)

    nookies.destroy(undefined, item)
}

export default logout