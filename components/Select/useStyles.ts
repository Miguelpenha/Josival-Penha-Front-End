import { StylesConfig, GroupBase } from 'react-select'
import { useTheme } from 'styled-components'

function useStyles(): StylesConfig<object, false, GroupBase<object>> {
    const theme = useTheme()

    return {
        input: base => ({
            ...base,
            color: theme.color
        }),
        singleValue: base => ({
            ...base,
            color: theme.color,
        }),
        placeholder: base => ({
            ...base,
            color: theme.color,
        }),
        noOptionsMessage: base => ({
            ...base,
            color: theme.color
        }),
        indicatorSeparator: base => ({
            ...base,
            backgroundColor: theme.color
        }),
        menu: base => ({
            ...base,
            backgroundColor: theme.backgroundColorSecondary
        }),
        dropdownIndicator: base => ({
            ...base,
            color: theme.color,
            ':hover': {
                color: theme.primary
            }
        }),
        container: base => ({
            ...base,
            width: '100%',
            marginTop: '3%',
            marginBottom: '4%',
            padding: '0 0.8rem',
            alignSelf: 'center',
            borderColor: theme.backgroundColor
        }),
        option: (base, props) => ({
            ...base,
            cursor: 'pointer',
            backgroundColor: props.isSelected ? theme.secondaryColor : theme.backgroundColor,
            ':active': {
                backgroundColor: theme.secondary
            }
        }),
        control: (base, props) => ({
            ...base,
            cursor: 'pointer',
            backgroundColor: theme.backgroundColor,
            borderColor: theme.backgroundColorSecondary,
            boxShadow: props.isFocused ? `0 0 0 1px ${theme.primary}` : '',
            ':hover': {
                borderColor: theme.backgroundColor,
            }
        }),
        menuList: base => ({
            ...base,
            borderRadius: '10px',
            scrollbarColor: `${theme.primary} ${theme.secondary}`,
            '::-webkit-scrollbar-track': {
                backgroundColor: theme.secondary
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor: theme.color
            }
        })
    }
}

export default useStyles