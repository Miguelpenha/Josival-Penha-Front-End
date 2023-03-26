import { Action } from 'kbar'
import { useRouter } from 'next/router'
import useActionsNotify from './useActionsNotify'
import useActionsStudents from './useActionsStudents'
import useActionsDocuments from './useActionsDocuments'
import useActionsDashboards from './useActionsDashboards'

function useActionsAdmin(): Action[] {
    const router = useRouter()
    const actionsNotify = useActionsNotify(router)
    const actionsStudents = useActionsStudents(router)
    const actionsDocuments = useActionsDocuments(router)
    const actionsDashboards = useActionsDashboards(router)

    return [
        {
            id: 'home',
            name: 'Página inicial',
            keywords: 'página inicial home',
            perform: () => router.push('/admin'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
            )
        },
        ...actionsStudents,
        {
            id: 'matters',
            name: 'Notas',
            keywords: 'notas notas matters matter',
            perform: () => router.push('/admin/matters'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        },
        ...actionsDocuments,
        ...actionsDashboards,
        ...actionsNotify,
        {
            name: 'Planilhas',
            id: 'spreadsheets',
            perform: () => router.push('/admin/spreadsheets'),
            keywords: 'planilhas planilha spreadsheets spreadsheet',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
                </svg>
            )
        },
        {
            id: 'back',
            name: 'Voltar',
            keywords: 'voltar back',
            perform: () => router.back(),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <rect fill="none" height="24" width="24"/>
                    <g>
                        <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
                    </g>
                </svg>
            )
        }
    ]
}

export default useActionsAdmin