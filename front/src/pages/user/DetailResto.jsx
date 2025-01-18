import { motion } from "framer-motion"
import DoubleBanner from "../../components/user/Homepage/DoubleBanner"
import BannerMobile from "../../components/user/Homepage/BannerMobile"
import BannerSearch from "../../components/user/resto/BannerSearch"
import { BreadCrumb } from 'primereact/breadcrumb'
import { Chip } from 'primereact/chip'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Avatar } from "primereact/avatar"
import { AvatarGroup } from "primereact/avatargroup"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"
import { GiPathDistance } from "react-icons/gi"
import LeafletMap from '../../utils/LeafletMap'
import CardMenu from "../../components/user/resto/CardMenu"

import crevette from "../../assets/tendm/crevette.jpg"
import tipan from "../../assets/tendm/tipan.jpg"
import andry from "../../assets/tendm/andry.jpeg"
import endgame from "../../assets/tendm/endgame.jpeg"
import sandra from "../../assets/tendm/sandra.jpeg"
import tornado from "../../assets/tendm/tornado.jpeg"
import lieu from '../../assets/tendm/lieu.jpg'
import tendm from '../../assets/brand/tendm.png'
import BookTableContainer from "../../components/user/resto/BookTableContainer"
import TrendBlogContainer from "../../components/user/resto/TrendBlogContainer"

const DetailResto = () => {
    const items = [{ label: 'Tend M'},]

    const chips = [
        { label: 'Malagasy' },
        { label: 'Chinoise'},
        { label: 'Fast-Food' },
        { label: 'Pizzeria' },
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

    const menus = [
        {
            id: 1,
            title : "Crevette à la mayonnaise",
            category : "Fruits de mer",
            price : "20 000 Ar",
            imgMenu : crevette 
        },
        {
            id: 2,
            title : "Tipan",
            category : "Variétés",
            price : "20 000 Ar",
            imgMenu : tipan, 
        },
        {
            id: 3,
            title : "Andry",
            category : "Fruits de mer",
            price : "22 000 Ar",
            imgMenu : andry, 
        },
        {
            id: 4,
            title : "Endgame",
            category : "Variétés",
            price : "30 000 Ar",
            imgMenu : endgame, 
        },
        {
            id: 5,
            title : "Sandra",
            category : "Fruits de mer",
            price : "18 000 Ar",
            imgMenu : sandra, 
        },
        {
            id: 6,
            title : "Tornado Burger sans porc",
            category : "Burger",
            price : "14 000 Ar",
            imgMenu : tornado, 
        },
    ]

    const [showMore, setShowMore] = useState(false)

    const description = `Tend M est un restaurant renommé situé au cœur d'Antananarivo, offrant une expérience culinaire unique. Avec une ambiance chaleureuse et accueillante, il est l'endroit idéal pour savourer des plats délicieux. Le restaurant propose une variété de cuisines, y compris malagasy, chinoise, fast-food et pizzeria, répondant ainsi à tous les goûts. Situé à deux adresses pratiques, Lot 3GPC+V6C Isoraka et Lot 3GMR+75 Ampasanimalo, il est facilement accessible pour tous. Les clients peuvent profiter d'un service exceptionnel et d'une atmosphère conviviale. Venez découvrir Tend M et laissez-vous séduire par ses saveurs exquises.`
    const words = description.split(' ')
    const shortDescription = words.slice(0, 250).join(' ') + (words.length > 250 ? '...' : '')

    const renderStars = (rating, sizeIcon) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <i key={`full-${i}`} className={`pi pi-star-fill text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        if (hasHalfStar) {
            stars.push(
                <i key="half" className={`pi pi-star-fill text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <i key={`empty-${i}`} className={`pi pi-star text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        return stars
    }

    const totalReviews = 6560
    const ratingDistributions = {
        5: 3500,
        4: 2000,
        3: 800,
        2: 200,
        1: 60
    }

    const ratingPercentages = Object.entries(ratingDistributions).map(([star, count]) => ({
        star: parseInt(star),
        count,
        percentage: ((count / totalReviews) * 100).toFixed(1)
    })).sort((a, b) => b.star - a.star)

  return (
    <div className="space-y-8 mt-20 mb-16">
        <BannerSearch/>

        <section className = "pt-4 px-44 flex flex-row space-x-12">
            <div>
                <i className="pi pi-arrow-left text-xs"></i>
            </div>
            <BreadCrumb model={items} home={{ icon: 'pi pi-home' }} classname="text-xs font-poppins bg-transparent border border-none -mt-1"/>
        </section>

        <section className="px-40 pt-3 grid grid-cols-2"> 
            <div className="relative -mt-2 z-10">
                <div className="relative">
                    <img src={lieu} alt="Lieu Tend M" className="w-[80%] h-[25rem] object-fit" style={{borderStartEndRadius : "5rem", borderEndEndRadius : "5rem"}}/>
                    <div className="absolute top-12 left-80">
                        <img src={tendm} alt="TEND M" className="rounded-full w-40 h-40" style={{border: "solid 5px white"}}/>
                    </div>
                    <div className="absolute top-0 left-0 bg-gray-500 bg-opacity-70 px-3 py-2 rounded-lg cursor-pointer" title="Voir la galerie">
                        <i className="text-lg pi pi-camera text-neutral-200"></i>
                    </div>
                    <div className="absolute top-52 bg-gray-500 bg-opacity-70 left-0 flex flex-col items-center justify-center p-1 gap-3 shadow-lg rounded-md w-fit">
                        <Link to="" className="flex items-center no-underline justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white w-12 h-12 rounded-full transform transition duration-300 hover:scale-110 hover:rotate-12">
                            <i className="pi pi-facebook text-xl"></i>
                        </Link>
                        <Link to="" className="flex items-center no-underline justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white w-12 h-12 rounded-full transform transition duration-300 hover:scale-110 hover:rotate-12">
                            <i className="pi pi-instagram text-xl"></i>
                        </Link>
                        <Link to="" className="flex items-center no-underline justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white w-12 h-12 rounded-full transform transition duration-300 hover:scale-110 hover:rotate-12">
                            <i className="pi pi-phone text-xl hover:scale-105"></i>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 absolute top-[50%] left-32">
                        <div className="bg-white flex flex-col shadow-lg rounded-xl pt-4 pb-2 w-28" title="Distance vous séparant : 15 - 120 min">
                            <GiPathDistance className="text-3xl opacity-75 flex justify-center items-center m-auto"/>
                            <p className="text-center">15 - 120 min</p>
                        </div>
                        <div className="bg-white flex flex-col shadow-lg rounded-xl pt-4 pb-2 w-28" title="Actuellement ouvert">
                            <i className="text-center text-lg pi pi-circle-fill text-teal mt-1"></i>
                            <p className="text-center mt-5">Ouvert</p>
                        </div>
                    </div>
                    <div className="pt-28">
                        <LeafletMap lat={-18.91066109450162} long = { 47.52069175340895} place = "Tend M" width="80%"/>
                    </div>
                </div>
            </div>

            <div className = "flex flex-col -mt-2">
                <div className = "bg-white shadow-lg rounded-t-3xl px-8 py-3">
                    <div className = "flex flex-row justify-between">
                        <div className = "">
                            <h2 className="text-4xl font-satisfy">Tend M</h2>
                            <p className="text-base text-gray-500 -mt-7">Restaurant</p>
                            <p className = "-mt-3"><i className = "text-xs pi pi-clock me-2"></i>Mardi au samedi - 10:00 à 21:00</p>
                            <div className = "flex flex-row w-96 space-x-4 flex-wrap mt-1">
                                {chips.map((chip, index) => (
                                    <Chip key={index} label={chip.label} className="font-poppins text-blackPure text-[0.95em]"/>
                                ))}
                            </div>
                            <div className = "pt-3">
                                <p className = "text-xs"><i className = "text-xs me-2 pi pi-map-marker"></i>Lot 3GPC+V6C Isoraka, Antananarivo</p>
                                <p className = "text-xs"><i className = "text-xs me-2 pi pi-map-marker -mt-3"></i>Lot 3GMR+75 Ampasanimalo, Antananarivo</p>
                            </div>
                            <div className = "mt-8">
                                <h3 className = "font-satisfy text-base">Détail</h3>
                                <p className = "w-full -mt-3">
                                    {shortDescription}
                                    {words.length > 60 && (
                                        <span onClick={() => setShowMore(true)} className="text-brick font-semibold ml-2 cursor-pointer" title = "Plus d'informations">
                                            Voir plus
                                        </span>
                                    )}
                                </p>
                            </div>

                            <div className = "mt-3 mb-8 flex flex-row justify-between">
                                <div className="flex flex-col px-auto">
                                    <div className="mt-8 ms-6">
                                        <h3 className="text-5xl font-semibold -mt-1 -ms-6 text-center">4.6</h3>
                                        <div className="-mt-11 flex justify-center -ms-5">{renderStars(4.6, "text-lg")}</div>
                                    </div>
                                    <div className="flex flex-row justify-center space-x-12">
                                        <p><i className="pi pi-users text-lg me-2"></i>6 560</p>
                                        <p><i className="pi pi-comment text-lg me-2"></i>1 223</p>
                                    </div>
                                    <AvatarGroup className="mt-3 flex justify-center">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                                    </AvatarGroup>
                                </div>

                                <div className="flex flex-col">
                                    <div className="mt-8 space-y-2">
                                        {ratingPercentages.map(({ star, percentage }) => (
                                            <div key={star} className="flex items-center space-x-3 w-[10rem]">
                                                <span className="text-sm w-8 text-right">{star}</span>
                                                <div className="flex-grow bg-gray-200 rounded-full h-2.5 w-[135%]">
                                                    <div
                                                        className="bg-teal h-2.5 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <Button label="Voir les commentaires" className = "text-xs bg-brick font-poppins border border-none outline outline-none mt-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                        <div className="flex flex-row space-x-6 mt-12">
                            <i className="pi pi-star hover:text-teal text-lg cursor-pointer" title = "Noter"></i>
                            <i className="pi pi-share-alt hover:text-teal text-lg cursor-pointer" title = "Partager"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className = "px-40 pt-12">
            <div className="flex justify-between">
            <h3 className = "text-3xl font-satisfy">Explorez les menus du restaurant</h3>
            <Button label="Consulter la carte" icon = "pi pi-clipboard" className = "font-poppins text-xs bg-transparent text-brick hover:bg-brick border border-brick h-10 mt-8 outline outline-none hover:text-white"/>
            </div>
            
            <div className = "grid grid-cols-3 gap-x-2 gap-y-6 mt-4">
                {menus.map((menu) => (
                    <CardMenu key={menu.id} menu={menu}/>
                ))}
            </div>
        </section>

         <section className="px-40 pt-16">
            <DoubleBanner />
        </section>

        <motion.div
            initial="hidden"
            whileInView="visible"
            className="pt-20 px-40"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <BookTableContainer />
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            className="pt-10 px-40"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <TrendBlogContainer/>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <BannerMobile />
        </motion.div>

        <Dialog header="Détail complet" visible={showMore} style={{ width: '50vw' }} onHide={() => setShowMore(false)}>
            <p>{description}</p>
        </Dialog>
    </div>  
  )
}

export default DetailResto