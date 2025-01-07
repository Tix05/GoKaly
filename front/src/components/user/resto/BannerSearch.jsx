import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import location from "../../../assets/icons/location.png"

const BannerSearch = () => {


  return (
    <div className="bg-neutral-800 h-80 flex flex-row justify-between px-36">
        <div className="pt-6 ps-10">
            <h1 className="text-4xl font-satisfy text-white w-[70%]">Découvrez les restaurants à proximité !</h1>
            <p className="text-xs text-white opacity-80 w-[75%]">GoKaly vous permet de découvrir les restaurants les plus proches de vous, que vous soyez dans une grande ville ou dans un petit village.</p>

            <div className="p-inputgroup flex-1 mt-10 w-[65%] h-12">
                <Button icon="pi pi-map-marker" className="border border-none outline text-sm font-poppins outline-none bg-teal text-white" title="Localiser sur la carte" />
                <InputText placeholder="Rechercher un restaurant..." className="font-poppins text-xs" />
                <Button icon="pi pi-search" label="Rechercher" className="border border-none outline text-sm font-poppins outline-none bg-teal text-white" />
            </div>
        </div>

        <div className="mt-8">
            <img src={location} alt="Location" className="w-80 h-64" />
        </div>
    </div>
    )
}

export default BannerSearch