import PropTypes from 'prop-types'
import { createContext, useState, useContext, useEffect } from 'react'
import fr from '../translations/fr'
import en from '../translations/en'

const LanguageContext = createContext()

const translations = {
    FR: fr,
    EN: en,
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('FR')
    const [translation, setTranslation] = useState(translations.FR)

    useEffect(() => {
        setTranslation(translations[language]);
    }, [language]);

    const switchLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
        } else {
            console.error(`Language code ${lang} is not supported.`);
        }
    };

    const t = (key) => {
        return translation[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useLanguage = () => {
    return useContext(LanguageContext)
}
