import HMenu from "../../components/user/HMenu"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useState } from "react"
import FoodCarousel from "../../components/user/FoodCarousel"
import { motion } from "framer-motion"
import LoginDialog from "./LoginDialog"

import "../../style/user/style.css"

const Homepage = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [visibleLogin, setVisibleLogin] = useState(false)

    return (
        <div className="custom-bg-home min-h-screen flex flex-col">
            <HMenu visibleLogin={visibleLogin} setVisibleLogin={setVisibleLogin} />

            <main className="ms-24 me-4 flex-1">
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className=" font-poppins font-semibold text-2xl w-[55%] -mt-12">
                        Bienvenue sur{" "}
                        <span className="text-teal font-sevillana text-4xl">GoKaly</span>,
                        votre application idéale pour découvrir, réserver et commander
                        auprès des meilleurs restaurants de votre région !
                    </h1>

                    <p className="w-[55%]  mt-8">
                        Explorez une expérience culinaire unique à portée de clic !
                    </p>
                </motion.div>

                <motion.div
                    className="bg-transparent mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="p-inputgroup flex-1 h-[3.5rem] custom-border-search rounded-3xl w-[45%]">
                        <InputText
                            placeholder="Rechercher un restaurant"
                            className="w-[45vw] custom-input-search bg-transparent indent-8 placeholder: border border-none font-poppins text-base  focus:outline-none focus:ring-2 focus:ring-teal transition duration-300"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                        <Button
                            title="Rechercher"
                            icon="pi pi-search"
                            className=" me-3 border border-none bg-brick text-white custom-btn-search p-inputgroup-addon outline outline-none ms-3 transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-8 w-[55%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <FoodCarousel />
                </motion.div>

                <p className="text-xs text-end mt-3 ">
                    Copyright 2024 - Tous droits réservés
                </p>
            </main>

            <LoginDialog visibleLogin={visibleLogin} setVisibleLogin={setVisibleLogin} />
        </div>
    )
}

export default Homepage
