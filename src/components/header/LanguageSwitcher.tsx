import { Language, isUA, languageValues } from "../../translation";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MouseEvent } from "react";
import FlagIcon from "../../static/images/FlagIcon";
import { useAppSelector } from "../../redux/hooks";
import { getLanguage } from "../../redux/app/appSelectors";


const LanguageSwitcher: React.FC = () => {
    const navigate = useNavigate()
    const lang = useAppSelector(getLanguage)

    const handleChange = () => {
        const pathname = window.location.pathname

        let newPathname: string = pathname
        languageValues.forEach((value) => {

            const hasLanguage = pathname.startsWith(`/${value}`)
            if (!hasLanguage) {
                return
            }

            const nextChar = newPathname.at(value.length + 1)

            const isNextCharFalsy = nextChar === "/" || nextChar === "" || nextChar === undefined
            if (!isNextCharFalsy) {
                return
            }

            newPathname = newPathname
                .substring(value.length + 2)

        })

        const isFirstCharSlash = newPathname[0] === "/"
        if (isFirstCharSlash) {
            newPathname = newPathname.slice(1)
        }

        const toggledLang = lang === Language.Ukrainian
            ? Language.English
            : Language.Ukrainian

        let path: string
        const isEmpty = newPathname === ""
        const isSlash = newPathname === "/"

        if (isEmpty || isSlash) {
            path = `/${toggledLang}`
        } else {
            path = `/${toggledLang}/` + newPathname
        }

        navigate(path)
    }

    return (
        <FlagIcon
            country={lang === Language.Ukrainian ? Language.English : Language.Ukrainian}
            onClick={handleChange}
        />
    )
}

export default LanguageSwitcher