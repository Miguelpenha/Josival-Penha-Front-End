import { toast } from 'react-toastify'

async function handleCopy(value: string | false | undefined) {
    if (value) {
        await window.navigator.clipboard.writeText(value)
  
        toast('Dado copiado', {
          type: 'info'
        })
    }
}

export default handleCopy