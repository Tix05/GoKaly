import { useOutletContext } from "react-router-dom"
import { Avatar } from "primereact/avatar"
import { Link } from "react-router-dom"
import { TabView, TabPanel } from 'primereact/tabview'
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import LeafletMap from "../../utils/LeafletMap"
import { Button } from "primereact/button"
import { InputTextarea } from "primereact/inputtextarea"
import { Chip } from 'primereact/chip'

import bgBurger from "../../assets/bucky/bg-burger.jpg"
import bucky from "../../assets/brand/bucky.png"
import carnivore from "../../assets/bucky/carnivore.jpg"
import chicken from "../../assets/bucky/chicken.jpg"
import savoyard from "../../assets/bucky/savoyard.jpg"
import monster from "../../assets/bucky/monster.jpg"
import minesao from "../../assets/bucky/minesao.jpg"
import { useState } from "react"

const ProfileResto = () => {
    const { collapsed } = useOutletContext()
    const [email, setEmail] = useState('buckyburger@gmail.com')
    const [mdp, setMdp] = useState('buckyburger')
    const [description, setDescription] = useState(
        "Tend M est un restaurant renommé situé au cœur d'Antananarivo, offrant une expérience culinaire unique. Avec une ambiance chaleureuse et accueillante, il est l'endroit idéal pour savourer des plats délicieux. Le restaurant propose une variété de cuisines, y compris malagasy, chinoise, fast-food et pizzeria, répondant ainsi à tous les goûts. Situé à deux adresses pratiques, Lot 3GPC+V6C Isoraka et Lot 3GMR+75 Ampasanimalo, il est facilement accessible pour tous. Les clients peuvent profiter d'un service exceptionnel et d'une atmosphère conviviale. Venez découvrir Tend M et laissez-vous séduire par ses saveurs exquises."
    )
    const [specialties, setSpecialties] = useState([
        'Fast-Food', 'Américain'
    ])

    const points = [
        {lat : -18.91066109450162, long : 47.52069175340895, place : "Tend M Isoraka"},
        {lat : -18.93093627639414, long : 47.54779860304597, place : "Tend M Ampasanimalo" },
    ]

    const stores = [
        {
            id : 1,
            place : "Ampasanimalo",
            manager : "HERINIAINA Tiavina Todisoa",
            contact : "+261 32 45 678 90",
        },
        {
            id : 2,
            place : "Ampasanimalo",
            manager : "HERINIAINA Tiavina Todisoa",
            contact : "+261 32 45 678 90",
        },
    ]

    const imgMenus = [
        { title : 'Carnivore Burger', img :  carnivore},
        { title : 'Chicken Burger', img :  chicken},
        { title : 'Savoyard Burger', img :  savoyard},
        { title : 'CMonster Burger', img :  monster},
        { title : 'Mine sao aux fruits de mer', img :  minesao},
        { title : 'Carnivore Burger', img :  carnivore},
    ]

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

    return (
        <section
        className="mt-24 mb-8"
        style={{
            width: `calc(100% - ${collapsed ? "5rem" : "280px"})`,
            marginLeft: collapsed ? "5rem" : "280px",
            paddingLeft: collapsed ? "1rem" : "2rem",
        }}
    >
        <div className = "flex justify-between pt-4 me-16">
            <h1 className="text-2xl font-kanit ms-3">Profil</h1>
            <div className="mt-5">
                {renderStars(4.4, "text-lg")}
            </div>
        </div>

        
        <div className="p-5 bg-neutral-50 -mt-1 rounded-2xl me-12 shadow-lg">
            <div className="relative rounded-2xl overflow-hidden h-52">
                <img
                    src={bgBurger}
                    alt="Burger"
                    className="w-full h-full object-cover z-5"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="flex justify-start space-x-12 relative">
                <div className="absolute bottom-4 left-6">
                    <Avatar
                        image={bucky}
                        size="xlarge"
                        shape="circle"
                        className="border-4 border-white shadow-lg w-24 h-24 rounded-full"
                    />
                </div>
                <div className = "ps-24 pt-3">
                    <div>
                        <h5 className="text-gray-500">Nom de l'établissement</h5>
                        <p className="text-base font-semibold -mt-3">Bucky Burger</p>
                    </div>
                </div>
                <div className = "pt-3">
                    <div>
                        <h5 className="text-gray-500">Email</h5>
                        <p className="text-base font-semibold -mt-3">buckyburger@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "grid grid-cols-[35%_65%] gap-x-6 me-20 mt-7">
            <div>
                <div className="flex justify-between px-12 py-5 bg-white shadow-lg rounded-2xl">
                    <div className = "text-center">
                        <p className = "text-xl font-extrabold">46</p>
                        <h4 className="text-gray-500 -mt-4">menus</h4>
                    </div>
                    <div className = "text-center">
                        <p className = "text-xl font-extrabold">7K</p>
                        <h4 className="text-gray-500 -mt-4">avis</h4>
                    </div>
                    <div className = "text-center">
                        <p className = "text-xl font-extrabold">4.6</p>
                        <h4 className="text-gray-500 -mt-4">note</h4>
                    </div>
                </div>

                <div className="mt-5 px-4 py-5 bg-white shadow-lg rounded-2xl">
                    <Link to = "/" className="no-underline text-brick"><h3 className="font-kanit text-xl">Galerie photos</h3></Link>
                    
                    <p className="-mt-1">Parcourez votre galerie photo ici</p>
                    <div className = "grid grid-cols-3 gap-y-2 gap-x-1 mt-8">
                        {imgMenus.map((menu, index) => (
                            <img key={index} src={menu.img} alt={menu.title} title = {menu.title} className="w-24 h-24 object-cover rounded cursor-pointer"/>
                        ))}
                    </div>
                </div>
            </div>
            

            <div className = "bg-neutral-50 rounded-2xl p-5 shadow-lg">
                <TabView className="bg-transparent">
                    <TabPanel header = "Compte restaurateur" headerClassName="text-sm mt-2 font-poppins bg-transparent">
                        <form className="mt-4">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <label htmlFor="" className="text-[0.85em] text-gray-500 font-poppins">Type de cuisine</label><br />
                                    <div className = "pt-3 flex space-x-2">
                                        { specialties.map((specialty, index) => (
                                            <Chip key={index} label={specialty} className="text-xs font-poppins"/>
                                        ))}
                                    </div>
                                </div>
                                <Button title = "Modifier" icon = "pi pi-pen-to-square" className = "bg-brick mt-4 text-white border border-none outline outline-none text-xs font-poppins px-4 h-8"/>
                            </div>
                            <div className="grid grid-cols-2 mt-6">
                                <div>
                                    <label htmlFor="" className="text-[0.85em] text-gray-500 font-poppins">Email</label><br />
                                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins rounded-xl text-xs mt-3"/>
                                </div>
                                <div>
                                    <label htmlFor="" className="text-[0.85em] text-gray-500 font-poppins">Mot de passe <i className="pi pi-info-circle text-xs ms-1 cursor-pointer"></i></label><br />
                                    <Password value={mdp} onChange={(e) => setMdp(e.target.value)} disabled className="font-poppins custom-password text-xs mt-3"/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="" className="text-[0.85em] text-gray-500 font-poppins">Description</label><br />
                                <InputTextarea autoResize value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={53} 
                                    className="mt-4 font-poppins text-xs"/>
                            </div>
                        </form>

                        
                    </TabPanel>

                    <TabPanel header = "Enseigne" headerClassName="text-sm mt-2 font-poppins bg-transparent">
                        <p className = "font-kanit font-semibold">Vous avez actuellement 7 points de vente</p> 
                    
                        <div className="grid grid-cols-1 gap-x-3 pt-4">
                            <div>
                                <LeafletMap points={points}/>
                            </div>

                            <div className = "pt-8">
                                { stores.map((store) => (
                                     <div key={store.id} className = "bg-white mb-3 shadow py-3 px-6 flex flex-row justify-between items-center rounded-lg">
                                        <div className="flex flex-row font-poppins justify-start space-x-6">
                                            <i className="pi pi-map-marker my-auto text-2xl"></i>
                                            <div>
                                                <h5 className = "font-bold font-poppins">Ampasanimalo</h5>
                                                <p className="font-poppins text-xs -mt-3"><i className = "pi pi-user text-xs me-3"></i><strong className="font-extrabold">Gérant : </strong> HERINIAINA Tiavina Todisoa</p>
                                                <p className="font-poppins text-xs -mt-1"><i className = "pi pi-phone text-xs me-3"></i><strong className="font-extrabold">N° Tel:</strong> +261 32 45 678 90</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Button label="Voir" className = "bg-transparent hover:bg-brick text-black hover:text-white px-4 py-2 mt-4 rounded font-poppins text-xs border border-brick outline outline-none"/>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>

    </section>
    
 
    )
}

export default ProfileResto