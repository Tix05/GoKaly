import { Avatar } from 'primereact/avatar'
import { Divider } from 'primereact/divider'

import carnivore from "../../assets/bucky/carnivore.jpg"
import monster from "../../assets/bucky/monster.jpg"
import savoyard from "../../assets/bucky/savoyard.jpg"
import chicken from "../../assets/bucky/chicken.jpg"
import minesao from "../../assets/bucky/minesao.jpg"

const FavMenuContainer = () => {
    const favmenus = [
        {
            id: 1,
            title: "Carnivore Burger",
            price: "18 000 Ar",
            img: carnivore,
            times: 154
        },
        {
            id: 2,
            title: "Monster Burger",
            price: "27 000 Ar",
            img: monster,
            times: 129
        },
        {
            id: 3,
            title: "Savoyard Burger",
            price: "22 000 Ar",
            img: savoyard,
            times: 102,
        },
        {
            id: 4,
            title: "Chicken Burger",
            price: "12 000 Ar",
            img: chicken,
            times: 98,
        },
        {
            id: 5,
            title: "Mine sao Fruits de mer",
            price: "15 000 Ar",
            img: minesao,
            times: 73
        }
    ]

    return (
        <section className="bg-neutral-50 py-2 px-6 rounded shadow me-7">
            <h2 className="text-lg">Menus favoris</h2>
            <p><i className="pi pi-info-circle text-[0.8em] me-2"></i>Visualisez les plats les plus commandés par vos clients</p>

            <div>
                {favmenus.map((menu) => (
                    <div key={menu.id}>
                        <div className="grid grid-cols-[10%_55%_35%] gap-x-3">
                            <div>
                                <p className="text-xl text-gray-500">#{menu.id}</p>
                            </div>

                            <div className="-mt-3">
                                <h5 className="text-sm font-normal">{menu.title}</h5>
                                <div className="grid grid-cols-2 gap-x-2 -mt-7">
                                    <p className="font-semibold text-sm">{menu.price}</p>
                                    <p className="font-normal text-xs text-gray-500 mt-4">x{menu.times}</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mx-auto">
                                <Avatar image={menu.img} alt={menu.title} shape='square' size='xlarge' className='rounded h-12' />
                            </div>
                        </div>
                        <Divider className="mt-1" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FavMenuContainer