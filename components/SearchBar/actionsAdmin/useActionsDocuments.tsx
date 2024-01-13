import { NextRouter } from 'next/router'
import { Action } from 'kbar'

function useActionsDocuments(router: NextRouter): Action[] {
    return [
        {
            id: 'documents',
            name: 'Documentos',
            keywords: 'documentos documento documents document',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
            )
        },
        {
            name: 'Documentos',
            parent: 'documents',
            id: 'viewDocuments',
            perform: () => router.push('/admin/documents'),
            keywords: 'documentos documento documents document',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
            )
        },
        {
            id: 'declarations',
            name: 'Declarações',
            parent: 'documents',
            keywords: 'declarações declaração declaration declarations documentos documento documents document',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        },
        {
            name: 'Declarações',
            parent: 'declarations',
            id: 'viewDeclarations',
            perform: () => router.push('/admin/documents/declarations'),
            keywords: 'declarações declaração declaration declarations documentos documento documents document',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        },
        {
            parent: 'declarations',
            id: 'declarationFrequency',
            name: 'Declaração de frequência',
            perform: () => router.push('/admin/documents/declarations/frequency'),
            keywords: 'declaração frequência frequency declaration documentos documento documents document',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        },
        {
            parent: 'declarations',
            id: 'declarationFinancial',
            name: 'Declaração financeira',
            perform: () => router.push('/admin/documents/declarations/financial'),
            keywords: 'declaração declaration documentos documento documents document declaration financial declaração financeira',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        },
        {
            parent: 'declarations',
            id: 'declarationProvisionalTransfer',
            name: 'Declaração provisória de transferência',
            perform: () => router.push('/admin/documents/declarations/provisional-transfer'),
            keywords: 'provisória transferência declaração declaration documentos documento documents document declaration provisória de transferência provisional transfer',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
            )
        }
    ]
}

export default useActionsDocuments