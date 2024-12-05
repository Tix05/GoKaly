import { useState } from "react"
import HMenu from "../../components/user/HMenu"
import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Divider } from "primereact/divider"
import EmailDialog from "../../components/user/EmailDialog"

const EmailRegister = () => {
    const [email, setEmail] = useState("")
    const [showDialog, setShowDialog] = useState(false)
    const [loading, setLoading] = useState(false)

    const verifyEmail = (e) => {
        setLoading(true)
        setTimeout(() => {
            e.preventDefault()
            setLoading(false)
            setShowDialog(true)
        }, 1500)
    }

    return (
        <div className="custom-bg-home min-h-screen flex flex-col">
            <HMenu />

            <main className="ms-24 me-4 mt-3 bg-white border shadow py-4 px-8 rounded w-[35vw]">
                <h1 className="text-md font-semibold text-center">Inscription</h1>
                <p className="text-sm text-center">Veuillez remplir le formulaire d'inscription</p>
                <Button label="S'inscrire avec Google" icon="pi pi-google" className="font-poppins text-sm border border-none outline outline-none text-black bg-neutral-200 shadow flex justify-center items-center mx-auto mt-6 py-2 px-7 w-80" />

                <div className="relative mt-8 mx-auto">
                    <Divider className="mt-3 w-80 flex justify-center items-center mx-auto" />
                    <p className="text-slate-300 font-light text-md absolute bg-white p-2 left-[12rem] -top-7">OU</p>
                </div>

                <form className="mx-auto mt-12">
                    <div className="p-inputgroup flex-1 w-80 mx-auto">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-envelope text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="nom" className="text-sm">Adresse e-mail</label>
                        </FloatLabel>
                    </div>

                    <Button onClick={verifyEmail} loading={loading} label="Soumettre" icon="pi pi-google" className="font-poppins border border-none outline outline-none text-sm text-white bg-brick flex justify-center items-center mx-auto mt-12 py-2 px-7 w-80 mb-5" />
                    <EmailDialog showDialog={showDialog} setShowDialog={setShowDialog} />
                </form>
            </main>


        </div>
    )
}

export default EmailRegister