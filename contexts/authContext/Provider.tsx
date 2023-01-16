import { FC, useState, useEffect } from 'react'
import base from '../../api/base'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string | null>(null)
    
    async function loginLocal(login: string, password: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await base.post('/teachers/login/local', {
            login,
            password
        })).data

        if (authenticated) {
            setTeacherID(teacherID)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER, teacherID, {
                path: '/',
                secure: true,
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                maxAge: 52560000 * 60 * 1 // 100 year
            })

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function loginGoogle(jwt: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await base.post('/teachers/login/google', {
            jwt
        })).data

        if (authenticated) {
            setTeacherID(teacherID)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER, teacherID, {
                path: '/',
                secure: true,
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                maxAge: 52560000 * 60 * 1 // 100 year
            })

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function logout() {
        setTeacherID(null)

        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER)
    }

    useEffect(() => {
        async function load() {
            const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:teacherIDRaw } = parseCookies()

            if (teacherIDRaw) {
                setTeacherID(teacherIDRaw)
            }
        }

        load().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{ loginLocal, logout, loginGoogle, teacherID }}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider