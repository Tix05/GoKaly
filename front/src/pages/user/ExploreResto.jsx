import { motion } from "framer-motion"
import { useState, useRef } from "react"
import BannerMobile from "../../components/user/Homepage/BannerMobile"
import { Dropdown } from 'primereact/dropdown'
import { TieredMenu } from 'primereact/tieredmenu'
import { Paginator } from 'primereact/paginator'
import { Link, useNavigate } from "react-router-dom"
import BannerSearch from "../../components/user/resto/BannerSearch"

import tendm from "../../assets/brand/tendm.png"
import brew from "../../assets/brand/brew.png"
import bissap from "../../assets/brand/bissap.png"
import bucky from "../../assets/brand/bucky.png"
import machu from "../../assets/brand/machu.png"
import colbert from "../../assets/brand/colbert.png"
import caramiel from "../../assets/brand/caramiel.png"
import bread from "../../assets/brand/bread.png"
import saka from "../../assets/brand/saka-express.png"

import DoubleBanner from "../../components/user/Homepage/DoubleBanner"

const ExploreResto = () => {
    const [selectedDistance, setSelectedDistance] = useState(null)
    const [selectedCuisine, setSelectedCuisine] = useState(null)
    const [selectedSpecialty, setSelectedSpecialty] = useState(null)
    const [selectedEtablishment, setSelectedEtablishment] = useState(null)
    const menu = useRef(null)
    const navigate = useNavigate()

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

    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(10)

    const onPageChange = (event) => {
        setFirst(event.first)
        setRows(event.rows)
    }

    const items = [
        { label: 'Les plus pertinents' },
        { label: 'Les plus notés' },
        { label: 'Les plus populaires' },
    ]

    const distances = [
        { name: 'Rayon de 1km' },
        { name: 'Rayon de 5km' },
        { name: 'Rayon de 10km' },
        { name: 'Rayon de 20km' },
    ]

    const cuisines = [
        { name: 'Malagasy' },
        { name: 'Italienne' },
        { name: 'Chinoise' },
        { name: 'Française' },
        { name: 'Américaine' },
        { name: 'Thailandaise' },
        { name: 'Indienne' },
        { name: 'Japonaise' },
        { name: 'Coréenne' },
    ]

    const specialties = [
        { name: 'Pizza' },
        { name: 'Grillade' },
        { name: 'Burger' },
        { name: 'Tacos' },
        { name: 'Sandwich' },
        { name: 'Pâtisserie' },
        { name: 'Viennoiserie' },
        { name: 'Snack' },
        { name: 'Glacerie' },
    ]

    const etablishments = [
        { name: 'Restaurant' },
        { name: 'Gargotte' },
        { name: 'Bar' },
        { name: 'Bistrot' },
        { name: 'Salon de thé' },
        { name: 'Boulangerie' },
        { name: 'Food Truck' },
        { name: 'Brasserie' },
    ]

    const restos = [
        {
            id: 1,
            nom: 'TEND M',
            description: "Cuisine Chinoise, Pizzeria, Grillade, Malagasy",
            rating: 4.5,
            image: tendm,
        },
        {
            id: 2,
            nom: 'Brew Lounge',
            description: "Des plats uniques 100% sans porc",
            rating: 4.8,
            image: brew,
        },
        {
            id: 3,
            nom: 'Bissap',
            description: "Cuisine Indienne, Malagasy, Européenne",
            rating: 3.7,
            image: bissap,
        },
        {
            id: 4,
            nom: 'Bucky Burger',
            description: "Fast-food : BURGER - TACOS - BUCKETS - FRITE",
            rating: 4,
            image: bucky,
        },
        {
            id: 5,
            nom: 'Machu Picchu',
            description: "Pâtisserie & salon de thé",
            rating: 3.8,
            image: machu,
        },
        {
            id: 6,
            nom: 'La Pâtisserie Colbert',
            description: "Pâtisserie - Chocolaterie",
            rating: 4.8,
            image: colbert,
        },
        {
            id: 7,
            nom: 'Caramiel by Sandie',
            description: "Pâtisserie - Salon de thé ",
            rating: 4,
            image: caramiel,
        },
        {
            id: 8,
            nom: 'Bread Mafan\'',
            description: "Pâtisserie, Boulangerie, Salon de Thé",
            rating: 4.5,
            image: bread,
        },
        {
            id: 9,
            nom: 'Saka Express',
            description: "Fast-Food, Poulet rôti,... n'attendent que vous",
            rating: 4.2,
            image: saka,
        },
    ]

    const sectionVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div className="space-y-8 mt-20 mb-16">
            <BannerSearch/>

            <div className="flex flex-row justify-between px-44 pt-6">
                <div className="flex flex-row justify-start space-x-3">
                    <Dropdown value={selectedDistance} onChange={(e) => setSelectedDistance(e.value)} options={distances} optionLabel="name"
                        placeholder="Distance" className="h-9 w-40 text-xs -mt-3 border border-neutral-300 bg-white text-black" panelClassName='text-xs font-poppins' />
                    <Dropdown value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.value)} options={cuisines} optionLabel="name"
                        placeholder="Cuisine" className="h-9 w-40 text-xs -mt-3 border border-neutral-300 bg-white text-black" panelClassName='text-xs font-poppins' />
                    <Dropdown value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.value)} options={specialties} optionLabel="name"
                        placeholder="Specialité" className="h-9 w-40 text-xs -mt-3 border border-neutral-300 bg-white text-black" panelClassName='text-xs font-poppins' />
                    <Dropdown value={selectedEtablishment} onChange={(e) => setSelectedEtablishment(e.value)} options={etablishments} optionLabel="name"
                        placeholder="Etablissement" className="h-9 w-40 text-xs -mt-3 border border-neutral-300 bg-white text-black" panelClassName='text-xs font-poppins' />
                </div>

                <div>
                    <i className="pi pi-sort-amount-up cursor-pointer hover:text-teal" title="Organiser le tri" onClick={(e) => menu.current.toggle(e)}></i>
                    <TieredMenu model={items} popup ref={menu} className="text-xs font-poppins" />
                </div>
            </div>

            <section className='pt-5 grid grid-cols-3 gap-x-4 gap-y-8 px-40'>
                {restos.map((resto, index) => (
                    <div
                        key={`${resto.id}-${index}`}
                        className="restaurant-carousel-item mx-4"
                    >
                        <div className="bg-white rounded shadow-lg restaurant-card cursor-pointer" onClick={() => navigate('/detail-resto')}>
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
            </section>

            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20]} onPageChange={onPageChange} className="font-poppins text-sm pt-8" />

            <section className="px-40 pt-8">
                <DoubleBanner />
            </section>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <BannerMobile />
            </motion.div>
        </div>
    )
}

export default ExploreResto