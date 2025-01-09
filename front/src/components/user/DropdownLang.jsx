import { useLanguage } from '../../utils/LangConfig'
import PropTypes from 'prop-types'
import { Dropdown } from 'primereact/dropdown'

const DropdownLang = ({ className }) => {
    const { language, switchLanguage } = useLanguage()

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value)
    }

    return (
        <div className={className}>
            <i className='pi pi-globe text-white'></i>
            <Dropdown value={language} onChange={handleLanguageChange} options={langOptions} optionLabel='name'
                optionValue='code' className='h-9 w-32 text-xs -mt-3 border border-none shadow-md custom-p-dropdown bg-blackCustom text-white' panelClassName='text-xs font-poppins bg-blackCustom text-white'
                placeholder={language} dropdownIcon="pi pi-chevron-down text-xs mt-1" valueTemplate={(option) => <span>{option.name}</span>} itemTemplate={(option) => <span>{option.name}</span>}
            />
        </div>
    )
}

DropdownLang.propTypes = {
    className: PropTypes.string,
}

export default DropdownLang