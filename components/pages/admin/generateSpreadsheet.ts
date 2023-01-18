import base from '../../../api/base'

async function generateSpreadsheet() {
    const { data } = await base.get('/students/export', {
        responseType: 'blob'
    })

    const href = URL.createObjectURL(data)
    
    const link = document.createElement('a')

    link.href = href
    
    link.setAttribute('download', 'Planilha de alunos.xlsx')

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

    URL.revokeObjectURL(href)
}

export default generateSpreadsheet