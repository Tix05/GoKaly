import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import { Button } from 'primereact/button'
import { Menubar } from "primereact/menubar"

const HMenu = () => {
    const navigate = useNavigate()

    const menuItems = [
        {
            label: 'Accueil',
            command: () => navigate('/home')
        },
        {
            label: 'Découvrir',
            command: () => navigate('/about')
        },
        {
            label: 'A propos',
            command: () => navigate('/about')
        }
    ]

    const logoContainer = (
        <div className="me-24">
            <Logo />
        </div>
    )

    const authBtn = (
        <div className="flex me-96 space-x-3">
            <i className="pi pi-shopping-cart text-white cursor-pointer mt-2 me-4" title="Votre panier"></i>
            <Link to="/login"><Button label="Se connecter" className="bg-brick text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
            <Link to="/home-register"><Button label="S'inscrire" className="bg-white text-black font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
        </div>
    )

    return (
        <header className='pt-5'>
            <Menubar model={menuItems} className='custom-menubar font-poppins text-sm text-white ms-16' start={logoContainer} end={authBtn} />
        </header>
    )
}

export default HMenu