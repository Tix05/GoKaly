import { useRef } from 'react'
import { DataView } from 'primereact/dataview'
import { Avatar } from 'primereact/avatar'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import { TieredMenu } from 'primereact/tieredmenu'

import carnivore from '../../assets/bucky/carnivore.jpg'

const RecentOrderContainer = () => {
    const menu = useRef(null)

    const items = [
        { label: 'Accepter la commande' },
        { label: 'Annuler la commande' },
        { label: 'Détail' },
    ]

    const orders = [
        {
            id: 1,
            img: carnivore,
            titleMenu: "Carnivore Burger",
            client: "John Doe",
            address: "Mandroseza",
            price: "17 000 Ar",
            number: 2,
            status: "En cours"
        },
        {
            id: 2,
            img: carnivore,
            titleMenu: "Carnivore Burger",
            client: "John Doe",
            address: "Mandroseza",
            price: "17 000 Ar",
            number: 2,
            status: "Livré"
        },
        {
            id: 3,
            img: carnivore,
            titleMenu: "Carnivore Burger",
            client: "John Doe",
            address: "Mandroseza",
            price: "17 000 Ar",
            number: 2,
            status: "Annulé"
        },
        {
            id: 4,
            img: carnivore,
            titleMenu: "Carnivore Burger",
            client: "John Doe",
            address: "Mandroseza",
            price: "17 000 Ar",
            number: 2,
            status: "Livré"
        },
        {
            id: 5,
            img: carnivore,
            titleMenu: "Carnivore Burger",
            client: "John Doe",
            address: "Mandroseza",
            price: "17 000 Ar",
            number: 2,
            status: "Livré"
        },
    ]

    const getSeverity = (order) => {
        switch (order.status) {
            case 'Livré':
                return 'success'

            case 'En cours':
                return 'warning'

            case 'Annulé':
                return 'danger'

            default:
                return null
        }
    }

    const itemTemplate = (order) => {
        return (
            <div className="col-12 mb-6" key={order.id}>
                <div className="grid grid-cols-[10%_35%_30%_15%_10%] gap-x-2">
                    <Avatar image={order.img} className="h-12" shape="square" size="large" />

                    <div className="-mt-2">
                        <p className="text-xs font-poppins font-semibold">{order.titleMenu}</p>
                        <p className="text-[0.8em] font-poppins -mt-1">{order.price} <span className="text-[1em] text-gray-400 ms-4">x{order.number}</span></p>
                    </div>

                    <div className="-mt-2">
                        <p className="text-xs font-poppins font-semibold">{order.client}</p>
                        <p className="text-[0.8em] font-poppins -mt-1">{order.address}</p>
                    </div>

                    <div className="mt-3">
                        <Tag value={order.status} severity={getSeverity(order)} className="font-poppins font-normal text-xs"></Tag>
                    </div>

                    <div className="mt-4">
                        <i className="pi pi-ellipsis-v text-sm cursor-pointer" title="Option" onClick={(e) => menu.current.toggle(e)}></i>
                        <TieredMenu model={items} popup ref={menu} className="text-xs font-poppins w-44" />
                    </div>
                </div>
            </div>
        )
    }

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null

        let list = items.map((product, index) => {
            return itemTemplate(product, index)
        });

        return <div className="grid grid-nogutter">{list}</div>
    }

    return (
        <section className="bg-neutral-50 py-2 px-6 rounded shadow">
            <h1>Les récentes commandes</h1>
            <DataView value={orders} listTemplate={listTemplate} className="mt-10" />
            <Button className="border border-brick font-poppins text-xs text-brick mt-7 px-8 flex justify-center items-center mx-auto bg-transparent outline outline-none hover:bg-brick hover:text-white" label="Voir plus" />
        </section>
    )
}

export default RecentOrderContainer