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
            id: 'settings',
            name: 'Configurações',
            keywords: 'configurações settings',
            perform: () => router.push('/settings'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                    </g>
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