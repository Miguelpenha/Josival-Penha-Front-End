import { FC } from 'react'
import useLogout from '../useLogout'
import { Title, ContainerButtons } from './style'
import ButtonSubmit from '../ButtonSubmit'

interface IProps {
    close: () => void
}

const ModalLogout: FC<IProps> = ({ close }) => {
    const logout = useLogout()

    return (
        <>
            <Title>Fazer logout?</Title>
            <ContainerButtons>
                <ButtonSubmit title="Cancelar" onClick={close}/>
                <ButtonSubmit title="Logout" onClick={logout}/>
            </ContainerButtons>
        </>
    )
}

export default ModalLogout