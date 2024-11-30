import React from "react"
import burger from "../../assets/burger.jpg"
import { motion } from "framer-motion" // Import de Framer Motion

const FoodCarousel = () => {
    const foods = [
        { id: 1, img: burger },
        { id: 2, img: burger },
        { id: 3, img: burger },
        { id: 4, img: burger },
        { id: 5, img: burger },
        { id: 6, img: burger },
        { id: 7, img: burger },
        { id: 8, img: burger },
    ]

    return (
        <motion.div
            className="carousel-container overflow-hidden relative w-[82%] h-28 mt-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="carousel-track flex items-center gap-4 animate-slide">
                {foods.concat(foods).map((food, index) => (
                    <div key={index} className="carousel-item flex-none w-1/4 h-28">
                        <img
                            src={food.img}
                            alt="Nourriture"
                            className="w-full h-full rounded object-cover"
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default FoodCarousel
