import base from '../services/api/base'

async function generateDocument(url: string, name: string) {
    const { data } = await base.get(url, {
        responseType: 'blob'
    })

    const file = new Blob([data], { type: 'application/pdf' })

    const href = URL.createObjectURL(file)
    
    const link = document.createElement('a')

    link.href = href
    
    link.setAttribute('download', name)

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

    URL.revokeObjectURL(href)
}

export default generateDocument