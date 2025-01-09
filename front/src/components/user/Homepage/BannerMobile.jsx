import smartphone from "../../../assets/smartphone.png"
import logo from "../../../assets/logo.png"
import pasta from "../../../assets/pasta.jpg"
import paella from "../../../assets/paella.jpg"
import soup from "../../../assets/soup.jpg"
import meat from "../../../assets/fried-meat.jpg"
import { Button } from "primereact/button"

const BannerMobile = () => {
    return (
        <section className="grid grid-cols-[30%_70%] gap-x-3 h-96 pt-12 pb-8 overflow-x-hidden">
            <div className="bg-brick shadow-md rounded flex flex-row justify-center">
                <div className="relative -ms-12">
                    <img src={smartphone} alt="Smartphone" className="w-64 h-64" />
                    <img src={logo} alt="GoKaly" className="absolute top-20 right-[5rem] w-20 h-20" />
                </div>
                <div className="-ms-10 mt-16 flex flex-col">
                    <Button icon="pi pi-apple" label="Télécharger sur Apple Store" className="bg-blackCustom w-44 rounded-3xl text-white font-poppins border border-none outline outline-none text-xs" />
                    <Button icon="pi pi-play-circle" label="Télécharger sur Google Play Store" className="bg-blackCustom mt-8 w-44 rounded-3xl text-white font-poppins border border-none outline outline-none text-xs" />
                </div>
            </div>

            <div className="flex flex-row justify-start space-x-4">
                <img src={pasta} alt="Pasta" className="rounded h-80 object-cover w-[14.5rem]" />
                <img src={paella} alt="Paella" className="rounded object-cover h-80 w-[14.5rem]" />
                <img src={soup} alt="Soup" className="rounded h-80 object-cover" />
                <img src={meat} alt="Meat" className="rounded h-80 object-cover w-52" />
            </div>
        </section>
    )
}

export default BannerMobile