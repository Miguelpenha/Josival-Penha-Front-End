import { FC, useState, useEffect } from 'react'
import base from '../../services/api/base'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string | null>(null)
    const [adminIndex, setAdminIndex] = useState<number | null>(null)

    async function loginLocalAdmin(login: string, password: string) {
        const { authenticated, index }: { authenticated: boolean, index: number } = (await base.post('/admin/auth/login/local', {
            login,
            password
        })).data

        if (authenticated) {
            setAdminIndex(index)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN, String(index), {
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
        const { authenticated, index }: { authenticated: boolean, index: number } = (await base.post('/admin/auth/login/google', {
            jwt
        })).data

        if (authenticated) {
            setAdminIndex(index)

            setCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN, String(index), {
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
        setAdminIndex(null)

        destroyCookie(undefined, process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN)
    }
    
    async function loginLocalTeacher(login: string, password: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await base.post('/teachers/auth/login/local', {
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
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await base.post('/teachers/auth/login/google', {
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
            const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:teacherIDRaw, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:adminIndexRaw } = parseCookies()

            if (teacherIDRaw) {
                setTeacherID(teacherIDRaw)
            } else if (adminIndex) {
                setAdminIndex(Number(adminIndexRaw))
            }
        }

        load().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{
            teacherID,
            adminIndex,
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