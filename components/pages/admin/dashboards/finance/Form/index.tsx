import { FC } from 'react'
import useOnSubmit from './useOnSubmit'
import { Container, Title, ButtonSubmit, TextButtonSubmit } from './style'
import Input from './Input'

interface Iprops {
    onCorrect: () => void
}

const Form: FC<Iprops> = ({ onCorrect }) => {
    const onSubmit = useOnSubmit(onCorrect)

    return (
        <Container onSubmit={onSubmit}>
            <Title>Financeiro</Title>
            <Input icon id="password" name="password" placeholder="Senha" required/>
            <ButtonSubmit type="submit">
                <TextButtonSubmit>Confirmar</TextButtonSubmit>
            </ButtonSubmit>
        </Container>
    )
}

export default Form