import { forwardRef, DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { InputStyled } from './style'

const TextArea = forwardRef<null, DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>(({ ...props }, ref) => {
    return (
        <InputStyled ref={ref as any} {...props}/>
    )
})

export default TextArea