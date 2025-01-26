import PropTypes from "prop-types"
import { Dialog } from "primereact/dialog"
import { BreadCrumb } from "primereact/breadcrumb"
import { TabView, TabPanel } from 'primereact/tabview'
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

import tornado from "../../../assets/tendm/tornado.jpeg"
import { useState } from "react"

const DialogMenu = ({visibleMenu, setVisibleMenu}) => {
    const items = [{ label: 'Tend M'}, { label: 'Menu' },]

    const quantity = useState(0)

    const menus = [
        {
            id : 1,
            titleMenu : "Tornado Burger",
            category : "Burger",
            price : "14 000 Ar",
            image : tornado,
            ingredient : "BUn, steack haché"   
        },
        {
            id : 2,
            titleMenu : "Tornado Burger",
            category : "Burger",
            price : "14 000 Ar",
            image : tornado,
            ingredient : "BUn, steack haché"   
        },
        {
            id : 3,
            titleMenu : "Tornado Burger",
            category : "Burger",
            price : "14 000 Ar",
            image : tornado,
            ingredient : "BUn, steack haché"   
        },
        {
            id : 4,
            titleMenu : "Tornado Burger",
            category : "Burger",
            price : "14 000 Ar",
            image : tornado,
            ingredient : "BUn, steack haché"   
        },
    ]

    const header = (
        <div >
            <BreadCrumb model={items} home={{ icon: 'pi pi-home' }} classname="text-xs font-poppins bg-transparent border border-none -mt-1"/>
        </div>
    )

    return (
        <Dialog visible={visibleMenu} header={header} className="font-poppins top-1 w-[55rem] h-[90%]" onHide={() => {if (!visibleMenu) return; setVisibleMenu(false) }}>
            <div className = "px-6 pb-6">
                <div className = "grid grid-cols-[40%_60%]">
                    <div>
                        <TabView className="bg-transparent">
                            <TabPanel header="Tout" headerClassName="text-sm mt-2 font-poppins bg-transparent" className="grid grid-cols-1 gap-y-3">
                                { menus.map((menu) => (
                                     <div key={menu.id} className = "bg-white flex flex-row space-x-5 shadow-lg rounded-xl py-2 px-4 cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out">
                                        <div>
                                            <img src={menu.image} alt={menu.titleMenu} className="w-20 h-20 object-cover rounded-xl"/>
                                        </div>
                                        <div>
                                            <h3 className = "text-base font-bold font-kanit">{menu.titleMenu}</h3>
                                            <p className = "text-sm font-bold text-brick font-kanit -mt-3">{menu.price}</p>
                                        </div>
                                    </div>
                                )) }
                            </TabPanel>

                            <TabPanel header="Pizza" headerClassName="text-sm mt-2 font-poppins bg-transparent" className="grid grid-cols-1 gap-y-3">
                                { menus.map((menu) => (
                                        <div key={menu.id} className = "bg-white flex flex-row space-x-5 shadow-lg rounded-xl py-2 px-4 cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out">
                                            <div>
                                                <img src={menu.image} alt={menu.titleMenu} className="w-20 h-20 object-cover rounded-xl"/>
                                            </div>
                                            <div>
                                                <h3 className = "text-base font-bold font-kanit">{menu.titleMenu}</h3>
                                                <p className = "text-sm font-bold text-brick font-kanit -mt-3">{menu.price}</p>
                                            </div>
                                        </div>
                                )) }
                            </TabPanel>

                            <TabPanel header="Snack" headerClassName="text-sm mt-2 font-poppins bg-transparent" className="grid grid-cols-1 gap-y-3">
                                 { menus.map((menu) => (
                                     <div key={menu.id} className = "bg-white flex flex-row space-x-5 shadow-lg rounded-xl py-2 px-4 cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out">
                                        <div>
                                            <img src={menu.image} alt={menu.titleMenu} className="w-20 h-20 object-cover rounded-xl"/>
                                        </div>
                                        <div>
                                            <h3 className = "text-base font-bold font-kanit">{menu.titleMenu}</h3>
                                            <p className = "text-sm font-bold text-brick font-kanit -mt-3">{menu.price}</p>
                                        </div>
                                    </div>
                                )) }
                            </TabPanel>
                        </TabView>
                    </div>

                    <div className = "mt-2">
                        <p className = "text-[0.8em] ms-8">Consulter les détails de chaque menu ici</p>

                        <section className="ms-8">
                            <div className="">
                                <img src={tornado} alt="Tornado Burger" className="w-full mt-4 h-40 rounded-2xl object-cover" />
                            </div>

                            <div className= "flex justify-between mt-4">
                                <h2 className="font-poppins">Tornado Burger</h2>
                                <p className="font-poppins text-sm">14 000 Ar</p>
                            </div>
                            
                            <p className = "text-xs mt-1">
                                Buns, Steack haché de boeuf, poulet frit, bacon croustillant, avocat en tranches, Fromage Cheddar, Oignons caramélisés, Sauce barbecue épicée, Jalapenos marinés,
                                Sauce ranch, Tomates fraiches en tranches, laitue croquante, champignons sautés, oeuf au plat, pickles de concombre, crème d'ail
                            </p>

                            <form className="mt-5 flex space-x-4">
                                <p className="text-sm">Quantité :</p>
                                <div className="flex space-x-3 items-center">
                                    <i className = "pi pi-minus"></i>
                                    <InputText className = "w-12 text-xs text-center font-poppins"/>
                                    <i className = "pi pi-plus"></i>
                                </div>
                            </form>

                            <div className = "mt-5">
                                <Button icon="pi pi-shopping-cart" label="Ajouter au panier" className = "font-poppins text-xs border border-none outline outline-none bg-brick"/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

DialogMenu.propTypes = {
    visibleMenu : PropTypes.bool.isRequired,
    setVisibleMenu : PropTypes.func.isRequired,
}

export default DialogMenu