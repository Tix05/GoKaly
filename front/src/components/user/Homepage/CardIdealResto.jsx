import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import { useLanguage } from "../../../utils/LangConfig"

const CardIdealResto = ({ restos }) => {
    const { t } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    const getVisibleCards = () => {
        const totalCards = restos.length
        return [
            restos[(currentIndex - 1 + totalCards) % totalCards],
            restos[currentIndex],
            restos[(currentIndex + 1) % totalCards]
        ]
    }

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <i key={`full-${i}`} className="pi pi-star-fill text-yellow-400 text-sm"></i>
            )
        }

        if (hasHalfStar) {
            stars.push(
                <i key="half" className="pi pi-star-fill text-yellow-400 text-sm opacity-50"></i>
            )
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <i key={`empty-${i}`} className="pi pi-star text-yellow-400 text-sm"></i>
            )
        }

        return stars
    }

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % restos.length)
    }, [restos.length])

    useEffect(() => {
        let interval
        if (isAutoPlay) {
            interval = setInterval(nextSlide, 5000)
        }
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [isAutoPlay, nextSlide])

    const handlePrevious = () => {
        setIsAutoPlay(false)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + restos.length) % restos.length)
    }

    const handleNext = () => {
        setIsAutoPlay(false)
        nextSlide()
    }

    useEffect(() => {
        if (!isAutoPlay) {
            const timeout = setTimeout(() => {
                setIsAutoPlay(true)
            }, 10000)
            return () => clearTimeout(timeout)
        }
    }, [isAutoPlay])

    return (
        <div className="space-y-7">
            <div className="flex justify-between items-center">
                <h1 className="font-satisfy text-2xl">{t('discoverIdealResto')}</h1>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrevious}
                        className="carousel-arrow w-10 h-10 rounded-full border border-none bg-white hover:bg-blackCustom hover:text-white shadow-md flex items-center justify-center"
                    >
                        <i className="pi pi-angle-left"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="carousel-arrow w-10 h-10 rounded-full border border-none hover:bg-blackCustom hover:text-white bg-white shadow-md flex items-center justify-center"
                    >
                        <i className="pi pi-angle-right"></i>
                    </button>
                </div>
            </div>

            <div className="restaurant-carousel">
                <div
                    className="restaurant-carousel-inner flex justify-center"
                >
                    {getVisibleCards().map((resto, index) => (
                        <div
                            key={`${resto.id}-${index}`}
                            className="restaurant-carousel-item mx-4"
                        >
                            <div className="bg-white rounded shadow-lg restaurant-card">
                                <div className="restaurant-image-container">
                                    <img src={resto.image} alt={resto.nom} className="w-24 h-16" />
                                </div>
                                <div className="restaurant-content-container">
                                    <h5 className="text-lg font-semibold -mt-2">{resto.nom}</h5>
                                    <div className="flex items-center gap-1 -mt-7">
                                        {renderStars(resto.rating)}
                                    </div>
                                    <p className="text-xs text-gray-600 mt-3">{resto.description}</p>
                                    <div className="flex flex-row justify-start space-x-3 mt-2">
                                        <Link className="rounded-full p-2 no-underline w-6 h-6 flex items-center justify-center" to="">
                                            <i className="pi pi-phone p-2 rounded-full hover:text-white hover:bg-teal text-black bg-white shadow-lg"></i>
                                        </Link>
                                        <Link className="rounded-full p-2 no-underline w-6 h-6 flex items-center justify-center" to="">
                                            <i className="pi pi-facebook p-2 rounded-full hover:text-white hover:bg-teal text-black bg-white shadow-lg"></i>
                                        </Link>
                                        <Link className="rounded-full p-2 no-underline w-6 h-6 flex items-center justify-center" to="">
                                            <i className="pi pi-instagram p-2 rounded-full hover:text-white hover:bg-teal text-black bg-white shadow-lg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

CardIdealResto.propTypes = {
    restos: PropTypes.array,
}

export default CardIdealResto