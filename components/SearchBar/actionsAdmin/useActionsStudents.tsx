import { NextRouter } from 'next/router'
import { Action } from 'kbar'

function useActionsStudents(router: NextRouter): Action[] {
    return [
        {
            id: 'students',
            name: 'Alunos',
            keywords: 'alunos aluno students student',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
            )
        },
        {
            name: 'Alunos',
            id: 'viewStudents',
            parent: 'students',
            keywords: 'alunos aluno students student',
            perform: () => router.push('/admin/students'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
            )
        },
        {
            parent: 'students',
            id: 'createStudent',
            name: 'Cadastrar aluno',
            keywords: 'cadastrar aluno',
            perform: () => router.push('/admin/students/create'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            )
        }
    ]
}

export default useActionsStudents