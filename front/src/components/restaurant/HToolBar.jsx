import PropTypes from "prop-types"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useState, useRef } from "react"
import { Toolbar } from 'primereact/toolbar'
import { Avatar } from "primereact/avatar"
import { TieredMenu } from 'primereact/tieredmenu'
import SideBarChat from "./SideBarChat"
import NotifPanel from "./NotifPanel"

import bucky from "../../assets/brand/bucky.png"

const HToolBar = ({ collapsed, setCollapsed }) => {
    const [search, setSearch] = useState('')
    const profileMenu = useRef(null)
    const [visibleChat, setVisibleChat] = useState(false)
    const [visibleNotif, setVisibleNotif] = useState(false)
    const op = useRef(null)

    const profileItems = [
        {
            label: "Profil",
            icon: "pi pi-user"
        },
        {
            label: "Déconnexion",
            icon: "pi pi-sign-out"
        },
    ]

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const start = (
        <div className="flex flex-row space-x-4">
            <Button icon="pi pi-bell" title="Notifications" className="bg-transparent hover:bg-teal hover:text-white rounded-full text-blackPure border border-none outline outline-none" onClick={(e) => op.current.toggle(e)} />
            <NotifPanel op={op} visibleNotif={visibleNotif} setVisibleNotif={setVisibleNotif} />

            <Button icon="pi pi-envelope" title="Messages" className="bg-transparent hover:bg-teal hover:text-white rounded-full text-blackPure border border-none outline outline-none" onClick={() => setVisibleChat(!visibleChat)} />
            <SideBarChat visibleChat={visibleChat} setVisibleChat={setVisibleChat} />
        </div>
    )

    const end = (
        <>
            <TieredMenu model={profileItems} popup ref={profileMenu} className="font-poppins text-xs" />
            <Avatar image={bucky} shape="circle" size="xlarge" className="p-1 border border-neutral-400 ms-8 cursor-pointer" title="Votre compte restaurateur"
                onClick={(e) => profileMenu.current.toggle(e)} />
        </>
    )

    return (
        <header
            className={`bg-neutral-50 shadow flex flex-row justify-start pt-2 ${collapsed ? 'space-x-72' : 'space-x-40'} fixed top-0 right-0 h-20 z-20 transition-all duration-300`}
            style={{
                width: `calc(100% - ${collapsed ? '4rem' : '270px'})`,
                marginLeft: collapsed ? '4rem' : '270px',
                paddingLeft: collapsed ? '2rem' : '3rem'
            }}
        >
            <div className="mt-3 flex flex-row">
                <i className={`pi pi-bars text-lg me-5 mt-1 cursor-pointer`} onClick={handleCollapsed}></i>
                <span className="text-lg font-semibold">Tableau de bord</span>
            </div>

            <div className="p-inputgroup flex h-10 w-64 mt-2 rounded-3xl" style={{ border: '1px solid #D9D9D9' }}>
                <InputText value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher..." className="bg-transparent indent-3 w-20 h-10 font-poppins text-xs outline border border-none outline-none" />
                <Button icon="pi pi-search" className="bg-transparent text-brick border border-none outline outline-none" />
            </div>

            <div>
                <Toolbar start={start} end={end} className="-mt-4 bg-transparent border border-none outline outline-none" />
            </div>
        </header>
    )
}

HToolBar.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
}

export default HToolBar