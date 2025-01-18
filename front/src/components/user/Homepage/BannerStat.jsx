import bannerStat from "../../../assets/banners/banner-stat.jpg"

const BannerStat = () => {
    return (
        <section className="relative">
            <div className="bg-blackPure bg-opacity-65 absolute inset-0"></div>
            <img src={bannerStat} alt="banner" className="object-cover w-full h-72" />
            <div className="absolute inset-x-0 top-12 flex items-center justify-center space-x-40 px-40">
                <div className="double-white-border relative bg-blackCustom bg-opacity-80 flex flex-col justify-center items-center">
                    <p className="text-center text-white text-sm">+1 000</p>
                    <i className="rounded-full p-3 pi pi-building-columns absolute text-xl -bottom-10 bg-teal"></i>
                    <h5 className="font-poppins text-sm absolute font-normal text-white -bottom-24">Partenaires</h5>
                </div>

                <div className="double-white-border relative bg-blackCustom bg-opacity-80 flex flex-col justify-center items-center">
                    <p className="text-center text-white text-sm">+200 000</p>
                    <i className="rounded-full p-3 pi pi-users absolute text-xl -bottom-10 bg-teal"></i>
                    <h5 className="font-poppins text-sm absolute font-normal text-white -bottom-24">utilisateurs</h5>
                </div>

                <div className="double-white-border relative bg-blackCustom bg-opacity-80 flex flex-col justify-center items-center">
                    <p className="text-center text-white text-sm">+500</p>
                    <i className="rounded-full p-3 pi pi-receipt absolute text-xl -bottom-10 bg-teal"></i>
                    <h5 className="font-poppins text-sm absolute font-normal text-white -bottom-24">Commandes</h5>
                </div>

                <div className="double-white-border relative bg-blackCustom bg-opacity-80 flex flex-col justify-center items-center">
                    <p className="text-center text-white text-sm">+150</p>
                    <i className="rounded-full p-3 pi pi-truck absolute text-xl -bottom-10 bg-teal"></i>
                    <h5 className="font-poppins text-sm absolute font-normal text-white -bottom-24">Livraisons</h5>
                </div>
            </div>
        </section>
    )
}

export default BannerStat