interface IAuthContext {
    teacherID: string | null
    adminIndex: number | null
    admin: {
        logout: () => Promise<void>
        loginGoogle: (jwt: string) => Promise<{ authenticated: boolean }>
        loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
    }
    teacher: {
        logout: () => Promise<void>
        loginGoogle: (jwt: string) => Promise<{ authenticated: boolean }>
        loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
    }
}

export default IAuthContext