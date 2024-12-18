import { InputText } from 'primereact/inputtext'
import { Button } from "primereact/button"
import { useLanguage } from '../../utils/LangConfig'
import DropdownLang from './DropdownLang'
import { Divider } from 'primereact/divider'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

import mvola from "../../assets/brand/mvola.png"
import orange from "../../assets/brand/orange.png"
import airtel from "../../assets/brand/airtel.png"
import visa from "../../assets/brand/visa.png"
import mastercard from "../../assets/brand/mastercard.png"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-blackPure text-white py-4 md:py-8">
      <section className="flex flex-col md:flex-row justify-between px-4 md:px-40 space-y-4 md:space-y-0">
        <div>
          <h4 className="font-normal">{t('newsTitle')}</h4>
          <div className="p-inputgroup flex-1 w-full md:w-96">
            <InputText className="font-poppins text-xs" placeholder={t('newsPlaceholder')} />
            <Button label={t('newsButton')} className="font-poppins text-xs bg-brick border border-none outline outline-none" />
          </div>
        </div>

        <DropdownLang className="md:pt-[3.5rem] flex flex-row space-x-4" />
      </section>

      <Divider className="mt-8" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-7 px-4 md:px-40">
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <Logo className="w-20 h-20" />
          </div>
          <p className="font-poppins text-xs w-full md:w-44">GoKaly est un site de référencement culinaire à Madagascar, qui vous permet de découvrir les meilleurs restaurants.</p>
        </div>

        <nav className="text-center sm:text-left">
          <h5 className="font-poppins text-white text-sm md:ms-8">Liens rapides</h5>
          <ul className="-mt-1">
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Accueil</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Blog</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">A propos</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Contact</li></Link>
          </ul>
        </nav>

        <nav className="text-center sm:text-left">
          <h5 className="font-poppins text-white text-sm md:ms-8">Business</h5>
          <ul className="-mt-1">
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Explorer</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Commander</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Partenariat</li></Link>
            <Link className="font-poppins text-white no-underline"><li className="mb-2">Réserver une table</li></Link>
          </ul>
        </nav>

        <div className="text-center sm:text-left">
          <h5 className="font-poppins text-white text-sm">Contact</h5>
          <div>
            <p><i className="pi pi-phone me-2"></i> +261 34 00 00 00</p>
            <p><i className="pi pi-map-marker me-2"></i> 34 rue de la paix, Antananarivo</p>
            <p><i className="pi pi-envelope me-2"></i> gokalysupport@gmail.com</p>
          </div>

          <div className="flex flex-row justify-center sm:justify-start space-x-10 mt-6 md:mt-12">
            <Link><i className="pi pi-facebook text-white"></i></Link>
            <Link><i className="pi pi-twitter text-white"></i></Link>
            <Link><i className="pi pi-instagram text-white"></i></Link>
            <Link><i className="pi pi-telegram text-white"></i></Link>
          </div>
        </div>
      </section>

      <Divider className="mt-8" />

      <section className="mt-8 flex flex-col md:flex-row justify-between px-4 md:px-40 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-12">
          <Link className="font-poppins text-white no-underline text-xs text-center">Conditions d'utilisation</Link>
          <Link className="font-poppins text-white no-underline text-xs text-center">Politique de confidentialité</Link>
        </div>

        <div className="flex flex-row justify-center md:justify-start space-x-2 md:me-6">
          <img src={mvola} alt="Mvola" className="w-8 md:w-10 h-5 md:h-6" />
          <img src={orange} alt="Orange Money" className="w-8 md:w-10 h-5 md:h-6" />
          <img src={airtel} alt="Airtel Money" className="w-8 md:w-10 h-5 md:h-6" />
          <img src={visa} alt="Visa" className="w-8 md:w-10 h-5 md:h-6" />
          <img src={mastercard} alt="MasterCard" className="w-8 md:w-10 h-5 md:h-6" />
        </div>
      </section>

      <Divider className="mt-8" />

      <p className='mt-8 text-center text-[0.75em]'>&copy; {new Date().getFullYear()} GoKaly. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer
