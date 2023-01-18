export interface IAuthContext {
    isAdmin: boolean
    teacherID: string | null
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