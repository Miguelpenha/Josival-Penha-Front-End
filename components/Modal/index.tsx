import { Dispatch, SetStateAction, FC } from 'react'
import ModalRaw from 'react-modal'
import useStyles from './useStyles'

interface IProps {
    children: any
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({ open, setOpen, children }) => {
    const styles = useStyles()
    
    function handleClose() {
        setOpen(false)
    }

    return (
        <ModalRaw onRequestClose={handleClose} isOpen={open} style={styles}>
            {children}
        </ModalRaw>
    )
}

export default Modal