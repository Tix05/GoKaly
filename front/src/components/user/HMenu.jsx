import { Menubar } from 'primereact/menubar'
import { Dropdown } from 'primereact/dropdown'
import { Badge } from 'primereact/badge'
import { Button } from 'primereact/button'
import logo from "../../assets/logo.png"
import { useLanguage } from '../../utils/LangConfig'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Avatar } from 'primereact/avatar'
import { useRef } from 'react'
import { TieredMenu } from 'primereact/tieredmenu'

import driver from "../../assets/driver.jpeg"

const HMenu = ({ logged, setLogged }) => {
  const { t, language, switchLanguage } = useLanguage()
  const navigate = useNavigate()
  const menu = useRef(null)

  const items = [
    { label: "Profil", icon: "pi pi-user" },
    { label: "Paramètres", icon: "pi pi-cog" },
    { label: "Déconnexion", icon: "pi pi-sign-out" },
  ]

  const langOptions = [
    { name: 'Français', code: 'FR' },
    { name: 'English', code: 'EN' },
  ]

  const handleLanguageChange = (e) => {
    switchLanguage(e.value)
  }

  const menuItems = [
    {
      label: t('menuHome'),
      url: '/'
    },
    {
      label: t('menuAbout'),
      url: '/about'
    },
    {
      label: 'Blog',
      url: '/blog'
    },
    {
      label: t('menuPartnership'),
      url: '/partnership'
    },
    {
      label: t('menuContact'),
      url: '/contact'
    },
  ]

  const start = (
    <div className='me-40'>
      <img src={logo} alt="GoKaly" className="w-16 h-16" />
    </div>
  )

  const end = (
    <div className={`flex flex-row space-x-4 ${logged ? "mt-2" : ""}`}>
      <div className='cursor-pointer' title={t('menuSearch')}>
        <i className="pi pi-search me-4"></i>
      </div>

      <div className="cursor-pointer" title={t('menuCart')}>
        <i className="pi pi-shopping-cart p-overlay-badge"></i>
        <Badge value="5" className='bg-teal text-[0.8em] w-4 font-poppins font-normal'></Badge>
      </div>

      <div className="">
        <i className='pi pi-globe text-white'></i>
        <Dropdown value={language} onChange={handleLanguageChange} options={langOptions} optionLabel='code'
          optionValue='code' className='h-9 w-16 text-xs -mt-3 border border-none shadow-md custom-p-dropdown2 bg-transparent' panelClassName='text-xs font-poppins'
          placeholder={language} dropdownIcon="pi pi-chevron-down text-xs mt-1" valueTemplate={(option) => <span>{option.code}</span>} itemTemplate={(option) => <span>{option.code}</span>}
        />
      </div>

      {logged ? (
        <div className="flex flex-row space-x-10">
          <i className="pi pi-bell ms-6"></i>
          <Avatar image={driver} shape='circle' size='large' className="-mt-4 cursor-pointer" title="Votre compte" onClick={(e) => menu.current.toggle(e)} />
          <TieredMenu model={items} popup ref={menu} className="text-xs font-poppins w-40" />
        </div>
      ) : (
        <div className="">
          <Button label={t('menuLogin')} className="font-poppins -mt-[0.125rem] h-7 text-xs bg-brick border border-none outline outline-none" onClick={() => navigate("/login")} />
        </div>
      )}

    </div>
  )

  return (
    <header className="bg-white shadow-md px-40 fixed w-full z-50">
      <Menubar start={start} end={end} model={menuItems} className="custom-menubar font-poppins text-xs" />
    </header>
  )
}

HMenu.propTypes = {
  logged: PropTypes.bool.isRequired,
  setLogged: PropTypes.func.isRequired
}

export default HMenu
