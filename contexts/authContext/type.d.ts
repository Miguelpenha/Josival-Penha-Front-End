export interface IAuthContext {
    teacherID: string | null
    logout: () => Promise<void>
    loginGoogle: (jwt: string) => Promise<{ authenticated: boolean }>
    loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
}