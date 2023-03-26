import { Action } from 'kbar'
import { useRouter } from 'next/router'

function useActionsTeacher(): Action[] {
    const router = useRouter()

    return [
        {
            id: 'home',
            name: 'Página inicial',
            keywords: 'página inicial home',
            perform: () => router.push('/teachers'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
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

export default useActionsTeacher