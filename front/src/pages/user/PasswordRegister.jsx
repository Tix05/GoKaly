import { useState } from "react"
import HMenu from "../../components/user/HMenu"
import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom"
import { InputText } from "primereact/inputtext"

const PasswordRegister = () => {
    const [identifiant, setIdentifiant] = useState("")
    const [mdp, setMdp] = useState("")
    const [mdpConfirm, setMdpConfirm] = useState("")
    const navigate = useNavigate()

    return (
        <div className="custom-bg-home min-h-screen flex flex-col">
            <HMenu />

            <main className="ms-24 me-4 mt-3 bg-white border shadow py-4 px-8 rounded w-[35vw]">
                <h1 className="text-md font-semibold text-center">Inscription</h1>
                <p className="text-sm text-center">Veuillez entrer le mot de passe pour votre compte</p>

                <form className="mx-auto mt-12">
                    <div className="p-inputgroup flex-1 w-80 mx-auto">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-user text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="identifiant" className="text-sm">Identifiant</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 w-80 mx-auto mt-8">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password value={mdp} onChange={(e) => setMdp(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="mdp" className="text-sm">Mot de passe</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 w-80 mx-auto mt-8">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password value={mdpConfirm} onChange={(e) => setMdpConfirm(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="mdpConfirm" className="text-sm">Confirmer mot de passe</label>
                        </FloatLabel>
                    </div>

                    <Button onClick={() => navigate('/info-register')} label="Suivant" className="font-poppins text-sm border border-none outline outline-none text-white bg-brick flex justify-center items-center mx-auto mt-12 py-2 px-7 w-80 mb-5" />
                </form>
            </main>
        </div>
    )
}

export default PasswordRegister