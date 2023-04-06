import { IRequest, IResponse } from './type'
import { Dispatch, SetStateAction } from 'react'
import base from '../../../../services/api/base'
import { setCookie } from 'nookies'

async function login(body: IRequest, url: string, setValue: Dispatch<SetStateAction<any>>, item: string) {
    const { data } = await base.post<IResponse>(url, body)
    const { authenticated, id } = data

    if (authenticated) {
        setValue(id)

        setCookie(undefined, item, String(id), {
            secure: true,
            domain: process.env.NEXT_PUBLIC_DOMAIN,
            maxAge: 52560000 * 60 * 1 // 100 year
        })

        return { authenticated: true }
    } else {
        return { authenticated: false }
    }
}

export default login