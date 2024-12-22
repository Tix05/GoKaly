import leftBanner from "../../../assets/banners/left-banner.jpg"
import rightBanner from "../../../assets/banners/right-banner.jpg"
import { Button } from "primereact/button"

const DoubleBanner = () => {
    return (
        <div className="flex flex-row justify-start space-x-72">
            <section className="relative">
                <div className="bg-blackPure bg-opacity-10 absolute w-[140%] inset-0"></div>
                <img src={leftBanner} alt="banner" className="object-cover w-[140%] shadow h-40" />
                <div className="absolute top-2 left-52">
                    <p className="text-sm font-kanit font-semibold w-[140%]">Utilisez les coupons pour obtenir une réduction de commande</p>
                    <Button label="Obtenir un coupon" className="bg-blackCustom text-white font-poppins text-xs border border-none mt-1 outline outline-none py-2 px-5 w-[140%] rounded-2xl" />
                </div>
            </section>

            <section className="relative">
                <div className="bg-blackPure bg-opacity-10 absolute w-[120%] inset-0"></div>
                <img src={rightBanner} alt="banner" className="object-cover w-[120%] shadow h-40" />
                <div className="absolute top-0 left-[15rem]">
                    <p className="text-sm font-kanit font-semibold w-[120%]">Accédez à une multitude de choix tout en étant membre</p>
                    <Button label="S'inscrire" className="bg-blackCustom text-white font-poppins text-xs border border-none mt-1 outline outline-none py-2 px-2 w-[120%] rounded-2xl" />
                </div>
            </section>
        </div>
    )
}

export default DoubleBanner