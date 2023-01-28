import { FC, useState, useEffect } from 'react'
import base from '../../services/api/base'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string | null>(null)
    const [isAdmin, setIsAdmin] = useState(false)

    async function loginLocalAdmin(login: string, password: string) {
        const { authenticated }: { authenticated: boolean } = (await base.post('/admin/login/local', {
            login,
            password
        })).data

        if (authenticated) {
            setIsAdmin(authenticated)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN, String(authenticated), {
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

    async function loginGoogleAdmin(jwt: string) {
        const { authenticated }: { authenticated: boolean } = (await base.post('/admin/login/google', {
            jwt
        })).data

        if (authenticated) {
            setIsAdmin(authenticated)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN, String(authenticated), {
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

    async function logoutAdmin() {
        setIsAdmin(false)

        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN)
    }
    
    async function loginLocalTeacher(login: string, password: string) {
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

    async function loginGoogleTeacher(jwt: string) {
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

    async function logoutTeacher() {
        setTeacherID(null)

        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER)
    }


    useEffect(() => {
        async function load() {
            const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:teacherIDRaw, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:isAdmin } = parseCookies()

            if (teacherIDRaw) {
                setTeacherID(teacherIDRaw)
            } else if (isAdmin) {
                setIsAdmin(Boolean(isAdmin))
            }
        }

        load().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{
            isAdmin,
            teacherID,
            admin: {
                logout: logoutAdmin,
                loginLocal: loginLocalAdmin,
                loginGoogle: loginGoogleAdmin
            },
            teacher: {
                logout: logoutTeacher,
                loginLocal: loginLocalTeacher,
                loginGoogle: loginGoogleTeacher
            }
        }}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider