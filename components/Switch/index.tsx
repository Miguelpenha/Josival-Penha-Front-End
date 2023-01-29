import SwitchRaw, { ReactSwitchProps } from 'react-switch'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { Container, Label } from './style'

interface IProps extends ReactSwitchProps {
    label: string
}

const Switch: FC<IProps> = ({ label, ...props }) => {
    const theme = useTheme()

    return (
        <Container>
            <SwitchRaw
                {...props}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={theme.primary}
                offColor={theme.backgroundColor}
                offHandleColor={theme.secondary}
                onHandleColor={theme.backgroundColorSecondary}
            />
            <Label>{label}</Label>
        </Container>
    )
}

export default Switch