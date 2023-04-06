import { useState, FC } from 'react'
import ModalRaw from './Modal'

function useModal() {
    const [openModal, setOpenModal] = useState(false)

    interface IProps {
        children: any
    }

    const Modal: FC<IProps> = ({ children }) => {
        return (
            <ModalRaw open={openModal} setOpen={setOpenModal}>
                {children}
            </ModalRaw>
        )
    }

    return {
        Modal,
        open: () => setOpenModal(true),
        close: () => setOpenModal(false)
    }
}

export default useModal