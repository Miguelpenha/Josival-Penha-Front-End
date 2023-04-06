import Modal from 'react-modal'
import { useTheme } from 'styled-components'

function useStyles() {
    const theme = useTheme()

    const styles: Modal.Styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        content: {
            width: '35em',
            margin: 'auto',
            height: '15em',
            border: 'none',
            display: 'flex',
            borderRadius: '10px',
            flexDirection: 'column',
            backgroundColor: theme.backgroundColorSecondary
        }
    }

    return styles
}

export default useStyles