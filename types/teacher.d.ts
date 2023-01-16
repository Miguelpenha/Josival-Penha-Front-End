import ICreated from './created'

interface ITeacher {
    name: string
    login: string
    gender: string
    password: string
    created: ICreated
}

export default ITeacher