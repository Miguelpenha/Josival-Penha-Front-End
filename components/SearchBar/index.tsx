import { FC, HTMLAttributes } from 'react'
import useActionsAdmin from './actionsAdmin'
import useActionsTeacher from './actionsTeacher'
import { parseCookies } from 'nookies'
import { KBarProvider } from 'kbar'
import Content from './Content'

const SearchBar: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
    const actionsAdmin = useActionsAdmin()
    const actionsTeacher = useActionsTeacher()
    const { [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_TEACHER]:idTeacher, [process.env.NEXT_PUBLIC_NAME_COOKIE_LOGIN_ADMIN]:isAdmin } = parseCookies()

    if (isAdmin || idTeacher) {
        return (
            <KBarProvider actions={isAdmin ? actionsAdmin : actionsTeacher}>
                <Content/>
                {children}
            </KBarProvider>
        )
    } else {
        return <>
            {children}
        </>
    }
}

export default SearchBar