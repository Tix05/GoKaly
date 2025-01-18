import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { BreadCrumb } from "primereact/breadcrumb"
import { Steps } from "primereact/steps"
import LeafletMap from "../../utils/LeafletMap"
import { Avatar } from "primereact/avatar"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { motion } from "framer-motion"

import driver from "../../assets/driver.jpeg"
import savoyard from "../../assets/bucky/savoyard.jpg"

const OrderDetail = () => {
    const [activeIndices, setActiveIndices] = useState([])
    const [orders, setOrders] = useState([
        {
            id: 1,
            menu: "Savoyard Burger",
            img: savoyard,
            quantite: 2,
            total: "30 000 Ar",
        },
        {
            id: 2,
            menu: "Savoyard Burger",
            img: savoyard,
            quantite: 2,
            total: "30 000 Ar",
        },
        {
            id: 3,
            menu: "Savoyard Burger",
            img: savoyard,
            quantite: 2,
            total: "30 000 Ar",
        },
    ])

    const { collapsed } = useOutletContext()

    const items = [
        { label: "Commande" },
        { label: "Détail de la commande" },
    ]

    const idTemplate = (order) => {
        return <span>#{order.id}</span>
    }

    const imageTemplate = (order) => {
        return <img src={order.img} alt={order.menu} className="rounded-xl w-12 h-12 object-cover" />
    }

    const quantiteTemplate = (order) => {
        return <span>x{order.quantite}</span>
    }

    const totalTemplate = (order) => {
        return <span>{order.total} Ar</span>
    }

    const actionTemplate = (order) => {
        return (
            <i
                className="pi pi-times-circle text-brick cursor-pointer ms-4"
                title="Retirer de la commande"
                onClick={() => removeOrder(order.id)}
            ></i>
        )
    }

    const removeOrder = (id) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
    }

    const toggleActiveIndex = (index) => {
        setActiveIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        )
    }

    const itemRenderer = (item, itemIndex) => {
        const isActiveItem = activeIndices.includes(itemIndex)
        const borderColorCustom = {
            border: isActiveItem
                ? "1px solid #36D1AA"
                : "1px solid rgba(0,0,0,0.35)",
        }

        return (
            <div className="flex flex-col">
                <span
                    className={`${
                        isActiveItem
                            ? "bg-teal text-white border border-teal"
                            : "bg-white text-gray-600 border border-gray-600"
                    } -mt-7 inline-flex items-center justify-center rounded-full h-20 w-20 z-10 cursor-pointer`}
                    style={borderColorCustom}
                    onClick={() => toggleActiveIndex(itemIndex)}
                >
                    <i className={`${item.icon} text-xl`} />
                </span>
                <span className="mt-4 text-xs font-poppins inline-flex items-center justify-center">
                    {item.label}
                </span>
            </div>
        )
    }

    const stepItems = [
        {
            icon: "pi pi-clipboard",
            label: "Commande créée",
            template: (item) => itemRenderer(item, 0),
        },
        {
            icon: "pi pi-wallet",
            label: "Paiement réussi",
            template: (item) => itemRenderer(item, 1),
        },
        {
            icon: "pi pi-truck",
            label: "Livraison en cours",
            template: (item) => itemRenderer(item, 2),
        },
        {
            icon: "pi pi-box",
            label: "Repas livré",
            template: (item) => itemRenderer(item, 3),
        },
        {
            icon: "pi pi-receipt",
            label: "Facturation",
            template: (item) => itemRenderer(item, 4),
        },
    ]

    return (
        <section
            className="mt-24 mb-8"
            style={{
                width: `calc(100% - ${collapsed ? "5rem" : "280px"})`,
                marginLeft: collapsed ? "5rem" : "280px",
                paddingLeft: collapsed ? "1rem" : "2rem",
            }}
        >
            <div className="flex justify-between ms-2 me-6">
                <h3 className="font-semibold text-base">Commande #12</h3>
                <BreadCrumb
                    model={items}
                    className="text-gray-500 text-xs font-poppins pt-8"
                />
            </div>

            <div className="shadow-xl rounded-3xl px-7 py-8 me-10 mt-4">
                <Steps
                    model={stepItems}
                    activeIndex={-1}
                    readOnly={false}
                />
            </div>

            <div className="grid grid-cols-[60%_35%] gap-x-8 mt-9 me-8">
                <div>
                    <div className="bg-neutral-50 shadow rounded-3xl p-4">
                        <LeafletMap lat={-18.93093627639414} long={47.54779860304597} place="Adresse actuelle de Mirindra" />
                    </div>

                    <div className="mt-6">
                        <DataTable value={orders} className="font-poppins text-xs mb-16">
                            <Column header="ID" body={idTemplate}></Column>
                            <Column header="Image" body={imageTemplate}></Column>
                            <Column header="Menu" field="menu"></Column>
                            <Column header="Quantite" body={quantiteTemplate}></Column>
                            <Column header="Total" body={totalTemplate}></Column>
                            <Column header="Action" body={actionTemplate}></Column>
                        </DataTable>
                    </div>
                </div>

                <div>
                    <div className="bg-neutral-50 shadow rounded-2xl py-4 px-7">
                        <div className="flex justify-start space-x-8 mt-6">
                            <div>
                                <Avatar image={driver} shape="circle" size="xlarge" className="flex justify-center items-center mx-auto" />
                                <h5 className="text-center mt-4 text-xs font-bold">Mirindra Harilala</h5>
                            </div>

                            <div className="mt-2">
                                <h6 className="text-gray-500 text-[0.75em]">Nombre de commande</h6>
                                <p className="text-3xl text-center -mt-3 font-extrabold">x24</p>
                            </div>
                        </div>
                        <p><i className="pi pi-map-marker text-xs mt-3 bg-brick text-white rounded-full p-3 me-3 cursor-pointer"></i>Lot 009 MA BIS Mandroseza</p>
                        <p><i className="pi pi-envelope text-xs bg-brick text-white rounded-full p-3 me-3 cursor-pointer"></i>mirindra@gmail.com</p>
                        <p><i className="pi pi-phone text-xs bg-brick text-white rounded-full p-3 me-3 cursor-pointer"></i>+261 32 45 678 90</p>
                    </div>

                    <div className="bg-white flex justify-start space-x-8 shadow rounded-3xl py-5 px-8 mt-5">
                    <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                transition: { duration: 2.5, repeat: Infinity },
                            }}
                        >
                            <i className="pi pi-truck text-blackPure p-4 bg-gray-200 text-3xl rounded-full"></i>
                        </motion.div>
                        <div className="-mt-5">
                            <h6 className="text-gray-500 text-xs">Temps estimé de livraison</h6>
                            <p className="text-xl font-bold -mt-5">20 - 30 min</p>
                        </div>
                    </div>

                    <div className="bg-white flex justify-between space-x-8 shadow rounded-3xl py-5 px-8 mt-5">
                        <div className="flex justify-start space-x-4 items-center">
                            <Avatar image={driver} shape="circle" size="large"/>
                            <div>
                                <h5 className = "font-light text-gray-500">Livreur</h5>
                                <p className="text-base font-semibold -mt-3">Tantely Andrian</p>
                                <p className="text-gray-500 -mt-3">ID : #1234</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <i className = "bg-brick text-white pi pi-phone text-lg p-2 rounded-full"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderDetail
