import { useState, useRef } from "react"
import { useOutletContext } from "react-router-dom"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Paginator } from 'primereact/paginator'
import { TieredMenu } from 'primereact/tieredmenu'

import savoyard from "../../assets/bucky/savoyard.jpg"
import { Tag } from "primereact/tag"

const OrderList = () => {
    const { collapsed } = useOutletContext()
    const [selectedStatus, setSelectedStatus] = useState(null)
    const menu = useRef(null)
    const statuts = [
        { name: 'Tout' },
        { name: 'Nouveau' },
        { name: 'En cours'},
        { name: 'Livré'},
        { name: 'Annulé'}
    ]

    const items = [
        { label: 'Accepter' },
        { label: 'Rejeter' },
        { label: 'Détail' },
    ]

    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(10)

    const onPageChange = (event) => {
        setFirst(event.first)
        setRows(event.rows)
    }

    const orders = [
        {
            id : 1,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '2',
            total : '50.000',
            status : 'Livré',
        },
        {
            id : 2,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'En cours',
        },
        {
            id : 3,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'En cours',
        },
        {
            id : 4,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Annulé',
        },
        {
            id : 5,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Nouveau',
        },
        {
            id : 6,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Nouveau',
        },
        {
            id : 7,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Nouveau',
        },
        {
            id : 8,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Nouveau',
        },
        {
            id : 9,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Nouveau',
        },
        {
            id : 10,
            img : savoyard,
            menu : 'Savoyard Burger',
            date : '12/12/2021 - 14:02',
            client : 'John Doe',
            adresse : 'Lot 123 Mandroseza',
            quantite : '1',
            total : '50.000',
            status : 'Annulé',
        },
    ]

    const getSeverity = (order) => {
        switch (order.status) {
            case 'Nouveau':
                return 'warning';

            case 'Livré':
                return 'success';
            
            case 'En cours':
                return 'warning';

            case 'Annulé':
                return 'danger';

            default:
                return null;
        }
    };

    const imageTemplate = (order) => {
        return <img src={order.img} alt={order.menu} className="rounded-xl w-12 h-12 object-cover" />
    }

    const idTemplate = (order) => {
        return <span>#{order.id}</span>
    }

    const quantiteTemplate = (order) => {
        return <span>x{order.quantite}</span>
    }

    const totalTemplate = (order) => {
        return <span>{order.total} Ar</span>
    }

    const statutTemplate = (order) => {
        return <Tag value = {order.status} severity={getSeverity(order)}></Tag>
    }

    const actionTemplate = () => {
        return (
            <>
                <i className = "pi pi-ellipsis-v cursor-pointer mt-3 ms-4"title = "Option" onClick={(e) => menu.current.toggle(e)}></i>
                <TieredMenu model={items} popup ref={menu} className="text-xs font-poppins w-36 -z-20"/>
            </>
        )
    }


    const Footertable = (
        <div className="flex justify-between items-center mt-3">
            <p className = "text-xs font-poppins">10 commandes sur 1 220</p>
            <div>
                <Paginator className="text-xs" first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
            </div>
        </div>
    )

    return (
        <section className="mt-24 mb-8"
        style={{
            width: `calc(100% - ${collapsed ? '5rem' : '280px'})`,
            marginLeft: collapsed ? '5rem' : '280px',
            paddingLeft: collapsed ? '1rem' : '2rem'
        }}> 
            <div className = "flex flex-row justify-between me-16">
                <div className = "">
                    <h2 className = "text-2xl font-semibold">Commande</h2>
                    <p className = "-mt-3 text-xs">Consulter la liste des commandes passées par les clients ici</p>
                </div>
                <div className = "flex justify-end space-x-3 mt-7">
                    <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={statuts} optionLabel="name" 
                    placeholder={statuts[0].name} panelClassName="text-xs font-poppins" className="w-32 shadow-lg h-10 bg-white border border-none outline outline-none text-xs font-poppins" />
                    <Button title = "Enregistrer une commande" icon="pi pi-plus" className = "h-10 hover:bg-brick hover:text-white border border-brick bg-transparent text-brick outline-outline-none font-poppins text-xs ml-2" />
                </div>
            </div>

            <DataTable value={orders} footer={Footertable} className="mt-5 font-poppins text-xs me-12 mb-16">
                <Column header="ID" body={idTemplate}></Column>
                <Column header="Image" body={imageTemplate}></Column>
                <Column header="Menu" field="menu"></Column>
                <Column header="Date" field="date"></Column>
                <Column header="Client" field="client"></Column>
                <Column header="Adresse" field="adresse"></Column>
                <Column header="Quantite" body={quantiteTemplate}></Column>
                <Column header="Total" body={totalTemplate}></Column>
                <Column header="Statut" body={statutTemplate}></Column>
                <Column header="Action" body={actionTemplate}></Column>
            </DataTable>
        </section>
    )
}

export default OrderList