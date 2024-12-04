import { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Password } from "primereact/password"
import { FloatLabel } from "primereact/floatlabel"
import Logo from "../../components/Logo"

const LoginAdmin = () => {
    const [identifiant, setIdentifiant] = useState("")
    const [mdp, setMdp] = useState("")

    return (
        <main className="custom-bg-admin pt-4">
            <Logo className="ms-20" />

            <section className="bg-white shadow-xl rounded w-[40vw] py-3 px-16 mt-4 ms-64">
                <h1 className="text-center text-lg font-semibold">Connexion</h1>
                <p className="font-poppins text-center text-sm">Veuillez vous connecter à votre compte restaurateur</p>

                <form className="mt-12 mx-4">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-envelope text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins custom-input-search text-xs border indent-3" />
                            <label htmlFor="identifiant" className="font-poppins text-sm">Identifiant</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 mt-10">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password value={mdp} onChange={(e) => setMdp(e.target.value)} className="font-poppins custom-input-search text-xs border custom-password"
                                feedback={false} tabIndex={1} />
                            <label htmlFor="mdp" className="font-poppins text-sm">Mot de passe</label>
                        </FloatLabel>
                    </div>

                    <Button label="Se connecter" className="mb-8 mt-10 font-semibold bg-brick text-white font-poppins text-sm w-full border border-none outline outline-none py-2" />
                </form>
            </section>

            <div className="absolute bottom-2 left-6">
                <p className="text-[0.65em]">Copyright 2024 - Tous droits réservés</p>
            </div>
        </main>
    )
}

export default LoginAdmin