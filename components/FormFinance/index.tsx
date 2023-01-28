import { FC } from 'react'
import useOnSubmit from './useOnSubmit'
import { Container, Title, ButtonSubmit } from './style'
import Input from '../Input'

interface Iprops {
    onCorrect: () => void
}

const Form: FC<Iprops> = ({ onCorrect }) => {
    const onSubmit = useOnSubmit(onCorrect)

    return (
        <Container onSubmit={onSubmit}>
            <Title>Financeiro</Title>
            <Input icon id="password" name="password" placeholder="Senha" required/>
            <ButtonSubmit title="Confirmar" type="submit"/>
        </Container>
    )
}

export default Form