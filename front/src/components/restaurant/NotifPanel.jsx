import { OverlayPanel } from 'primereact/overlaypanel'
import PropTypes from 'prop-types'
import { Avatar } from 'primereact/avatar'

import driver from "../../assets/driver.jpeg"

const NotifPanel = ({ op, visibleNotif, setVisibleNotif }) => {
    const notifItems = [
        {
            label: "Une nouvelle commande a été reçue : Commande #12456 de Jean Dupont",
            icon: "pi pi-receipt",
            time: "il y a 1 min"
        },
        {
            label: "La commande #12456 a été annulée par le client. Aucun débit n'a été effectué",
            icon: "pi pi-receipt",
            time: "il y a 15 min"
        },
        {
            label: "Vous avez reçu un nouveau message - Client : Julie Bernard",
            icon: "pi pi-envelope",
            time: "01 Janvier 2025 - 10:05"
        },
        {
            label: "Commande #12457 livrée avec succès. Statut confirmé par le client",
            icon: "pi pi-truck",
            time: "30 Décembre 2024 - 17:20"
        },
        {
            label: "Tix a réagi à votre blog Burger Vegan",
            image: driver,
            icon: "pi pi-book",
            time: "29 Décembre 2024 - 12:35"
        },
    ]

    return (
        <OverlayPanel ref={op} visible={visibleNotif} onHide={() => setVisibleNotif(false)} className='w-64 h-96 relative'>
            <div className="absolute top-0 left-0 right-0 bottom-10 overflow-y-auto custom-scrollbar pr-1">
                {notifItems.map((item, index) => (
                    <div key={index} className='flex items-center hover:bg-teal px-3 hover:bg-opacity-30 hover:cursor-pointer hover:rounded bg-white space-x-4 justify-between border-b border-neutral-300 -mb-3'>
                        {item.image ? <Avatar image={item.image} shape="circle" className="w-10 h-9" /> : <i className={`pi ${item.icon} text-xs rounded-full bg-teal p-2 -mt-6 text-white`}></i>}
                        <div>
                            <h4 className="font-normal text-neutral-700 text-xs font-poppins">{item.label}</h4>
                            <p className="font-light text-neutral-400 text-[0.65em] -mt-2 font-poppins">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='absolute bottom-0 left-0 right-0 bg-neutral-50 h-10 z-10' style={{ borderTop: '1px solid #D9D9D9' }}>
                <h4 className="font-normal text-brick text-xs text-center font-poppins mt-3">Voir tous les notifications</h4>
            </div>
        </OverlayPanel>
    )
}

NotifPanel.propTypes = {
    op: PropTypes.object,
    visibleNotif: PropTypes.bool,
    setVisibleNotif: PropTypes.func
}

export default NotifPanel