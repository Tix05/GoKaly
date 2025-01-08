import explore from "../../../assets/icons/explore.png"
import order from "../../../assets/icons/order.png"
import delivery from "../../../assets/icons/delivery.png"
import { useLanguage } from "../../../utils/LangConfig"

const CardInfo = () => {
    const { t } = useLanguage()

    return (
        <section className="flex justify-center space-x-4 px-40">
            <div className="custom-border-card card shadow-lg border border-neutral-600 flex flex-row justify-between space-x-6 bg-white rounded-xl py-7 px-12 w-96 cursor-pointer hover:shadow-xl transition duration-300">
                <div>
                    <img src={explore} alt="Explore" className="w-8 h-8 mt-6" />
                </div>
                <p className="text-xs w-72">
                    {t('homeExploreCard')}
                </p>
            </div>

            <div className="custom-border-card card shadow-lg border border-neutral-600 flex flex-row justify-between space-x-6 bg-white rounded-xl py-7 px-12 w-96 cursor-pointer hover:shadow-xl transition duration-300">
                <div>
                    <img src={order} alt="Order" className="w-8 h-8 mt-6" />
                </div>
                <p className="text-xs">
                    {t('homeOrderCard')}
                </p>
            </div>

            <div className="custom-border-card card shadow-lg border border-neutral-600 flex flex-row justify-between space-x-6 bg-white rounded-xl py-7 px-12 w-96 cursor-pointer hover:shadow-xl transition duration-300">
                <div>
                    <img src={delivery} alt="Delivery" className="w-8 h-8 mt-6" />
                </div>
                <p className="text-xs">
                    {t('homeDeliveryCard')}
                </p>
            </div>
        </section>
    )
}

export default CardInfo