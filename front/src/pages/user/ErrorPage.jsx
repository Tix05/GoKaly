import { useState } from "react"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import HMenu from "../../components/user/HMenu"
import Footer from "../../components/user/Footer"

import errorBurger from "../../assets/error-burger.png"
import deco from "../../assets/deco.png"
import deco1 from "../../assets/deco1.png"

const ErrorPage = () => {   
    const [logged, setLogged] = useState(false) 
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col">
            <HMenu logged={logged} setLogged={setLogged} />

             <div className = "space-y-8 -mt-8 mb-28 relative">
                <div className = "flex flex-row justify-center items-center mx-auto">
                    <p className = "text-[18rem] ms-12 font-extrabold font-kanit text-brick">4</p>
                    <img src={errorBurger} alt="404 Error" className="w-72 h-48"/>
                    <p className = "text-[18rem] -ms-8 font-extrabold font-kanit text-brick">4</p>
                </div>

                <div>
                    <h1 className="text-5xl ms-8 -mt-40 text-center font-poppins font-extrabold text-brick">Oups ! <span className="text-black">Page introuvable</span></h1>
                    <p className="text-base text-center mx-auto ps-12 mt-12 w-[40%]">Il semble que la page que vous cherchez ait été déplacée, supprimée, ou qu'elle n'ait jamais existé</p>
                    <Button label = "Retour en arrière" icon = "pi pi-arrow-left" className = "bg-brick font-poppins border border-none outline-none text-white px-20 py-4 rounded-[2rem] flex justify-center me-auto ms-[34rem] mt-12 items-center"
                        onClick={() => navigate(-1)}/>
                </div>

                <div className="absolute top-20 left-0">
                    <img src={deco} alt="Decoration"/>
                </div>

                <div className="absolute -bottom-[5rem] right-0">
                    <img src={deco1} alt="Decoration"/>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ErrorPage