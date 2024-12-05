import { useState } from "react"
import HMenu from "../../components/user/HMenu"
import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"

const InfoRegister = () => {
    const [nom, setNom] = useState("")
    const [location, setLocation] = useState("")
    const [numero, setNumero] = useState("")

    return (
        <div className="custom-bg-home min-h-screen flex flex-col" >
            <HMenu />

            <main className="ms-24 me-4 mt-2 bg-white border-neutral-800 shadow-lg py-4 px-8 rounded w-[35vw]">
                <h1 className="text-lg font-semibold text-center">Inscription</h1>
                <p className="text-sm text-center">Veuillez entrer vos informations personnelles</p>

                <form className="mx-auto mt-12">
                    <div className="p-inputgroup flex-1 w-80 mx-auto">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-user text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="nom" className="text-sm">Nom</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 w-80 mx-auto mt-8">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-home text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={location} onChange={(e) => setLocation(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="location" className="text-sm">Domicile</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 w-80 mx-auto mt-8">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-phone text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={numero} onChange={(e) => setNumero(e.target.value)} className="font-poppins text-sm border" />
                            <label htmlFor="location" className="text-sm">Numéro de téléphone</label>
                        </FloatLabel>
                    </div>

                    <Button label="Soumettre" icon="pi pi-google" className="font-poppins text-sm text-white bg-brick flex justify-center items-center mx-auto mt-12 py-2 px-7 w-80 mb-5 border border-none outline outline-none" />
                </form>
            </main>
        </div>
    )

}

export default InfoRegister