import { NextRouter } from 'next/router'
import { Action } from 'kbar'

function useActionsDashboards(router: NextRouter): Action[] {
    return [
        {
            id: 'dashboards',
            name: 'Dashboards',
            keywords: 'dashboards dashboard',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <rect fill="none" height="24" width="24"/>
                    <path d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/>
                </svg>
            )
        },
        {
            name: 'Dashboards',
            parent: 'dashboards',
            id: 'viewDashboards',
            keywords: 'dashboards dashboard',
            perform: () => router.push('/admin/dashboards'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <rect fill="none" height="24" width="24"/>
                    <path d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/>
                </svg>
            )
        },
        {
            name: 'Financeiro',
            parent: 'dashboards',
            id: 'financeDashboards',
            keywords: 'Financeiro dashboards dashboard',
            perform: () => router.push('/admin/dashboards/finance'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <g>
                            <rect height="7" width="3" x="4" y="10"/>
                            <rect height="7" width="3" x="10.5" y="10"/>
                            <rect height="3" width="20" x="2" y="19"/>
                            <rect height="7" width="3" x="17" y="10"/>
                            <polygon points="12,1 2,6 2,8 22,8 22,6"/>
                        </g>
                    </g>
                </svg>
            )
        },
        {
            name: 'Geral',
            parent: 'dashboards',
            id: 'generalDashboards',
            keywords: 'Geral dashboards dashboard',
            perform: () => router.push('/admin/dashboards/general'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
                </svg>
            )
        }
    ]
}

export default useActionsDashboards