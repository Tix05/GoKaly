import HMenu from "../../components/user/HMenu"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

const HomeRegister = () => {
    const navigate = useNavigate()

    return (
        <div className="custom-bg-home min-h-screen flex flex-col">
            <HMenu />

            <main className="ms-24 me-4 mt-20 flex-1">
                <h1 className="text-lg font-normal w-[50%]">Rejoignez notre plateforme culinaire pour découvrir, partager et évaluer les meilleurs restaurants. Créez un compte et profitez d'expériences gastronomiques mémorables !</h1>
                <Button onClick={() => navigate('/email-register')} label="Commencer" className="mt-12 font-poppins text-lg border border-none outline outline-none bg-brick text-white rounded-3xl px-8 py-2" />
            </main>
        </div>
    )
}

export default HomeRegister