import SelectRaw, { OptionsOrGroups, GroupBase } from 'react-select'
import { FC } from 'react'
import useStyles from './useStyles'

interface IProps {
    name: string
    required?: boolean
    placeholder?: string
    defaultValue?: { label: string, value: string }
    value?: any
    onChange?: (value: any) => void
    options: OptionsOrGroups<object, GroupBase<object>> | undefined
}

const Select: FC<IProps> = ({ name, options, onChange, defaultValue, placeholder, ...props }) => {
    const styles = useStyles()
    
    return (
        <SelectRaw
            id={name}
            {...props}
            name={name}
            styles={styles}
            options={options || []}
            onChange={onChange as any}
            defaultValue={defaultValue as any}
            noOptionsMessage={() => <span>Sem opções</span>}
            placeholder={placeholder || 'Escolha uma opção...'}
        />
    )
}

export default Select