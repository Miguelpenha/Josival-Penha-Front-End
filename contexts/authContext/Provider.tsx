import { FC, useState, useEffect } from 'react'
import useService from './services'
import IAuthContext from './type'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string | null>(null)
    const [adminIndex, setAdminIndex] = useState<number | null>(null)
    const { load, authService: { admin, teacher } } = useService(setAdminIndex, setTeacherID)

    useEffect(() => {
        load().then()
    }, [])

    const value: IAuthContext = {
        teacherID,
        adminIndex,
        admin: {
            logout: admin.logout,
            loginLocal: admin.loginLocal,
            loginGoogle: admin.loginGoogle
        },
        teacher: {
            logout: teacher.logout,
            loginLocal: teacher.loginLocal,
            loginGoogle: teacher.loginGoogle
        }
    }
    
    return (
        <TypesContext.Provider value={value}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider