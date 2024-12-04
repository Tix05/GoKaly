import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import { Button } from 'primereact/button'
import { Menubar } from "primereact/menubar"

const HMenu = ({ visibleLogin, setVisibleLogin }) => {
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
            <i className="pi pi-shopping-cart  cursor-pointer mt-2 me-4" title="Votre panier"></i>
            <Button label="Se connecter" className="bg-brick text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" onClick={() => setVisibleLogin(true)} />
            <Link to="/home-register"><Button label="S'inscrire" className="bg-neutral-100 shadow text-black font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
        </div>
    )

    return (
        <header className='pt-1'>
            <Menubar model={menuItems} className='custom-menubar font-poppins text-sm  ms-16' start={logoContainer} end={authBtn} />
        </header>
    )
}

export default HMenu