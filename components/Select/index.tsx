import SelectRaw, { OptionsOrGroups, GroupBase } from 'react-select'
import { FC } from 'react'
import useStyles from './useStyles'

interface IProps {
    name: string
    onChange?: (value: any) => void
    options: OptionsOrGroups<object, GroupBase<object>> | undefined
}

const Select: FC<IProps> = ({ name, options, onChange }) => {
    const styles = useStyles()
    
    return (
        <SelectRaw
            id={name}
            name={name}
            styles={styles}
            options={options || []}
            onChange={onChange as any}
            placeholder="Escolha uma opção..."
            noOptionsMessage={() => <span>Sem opções</span>}
        />
    )
}

export default Select