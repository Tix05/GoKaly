import { useState, useCallback, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MegaMenu } from 'primereact/megamenu'
import { Avatar } from 'primereact/avatar'
import { Divider } from 'primereact/divider'
import PropTypes from 'prop-types'
import { useLanguage } from '../../utils/LangConfig'

import bucky from '../../assets/brand/bucky.png'

const VMenu = ({ collapsed, setCollapsed }) => {
    const { t } = useLanguage()
    const [openSubmenu, setOpenSubmenu] = useState(null)
    const [activeSubmenuParent, setActiveSubmenuParent] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const submenuRefs = useRef({})
    const menuContainerRef = useRef(null)

    const toggleSubmenu = useCallback(
        (label) => {
            if (openSubmenu === label) {
                setIsAnimating(true)
                setTimeout(() => {
                    setOpenSubmenu(null)
                    setActiveSubmenuParent(null)
                    setIsAnimating(false)
                }, 300)
            } else {
                setOpenSubmenu(label)
                setActiveSubmenuParent(label)
                setIsAnimating(true)
                setTimeout(() => {
                    setIsAnimating(false)
                }, 300)
            }
        },
        [openSubmenu]
    )

    const toggleMenu = () => {
        setCollapsed(!collapsed)
        setOpenSubmenu(null)
        setActiveSubmenuParent(null)
    }

    const itemRenderer = (item, itemIndex) => {
        const isActive = openSubmenu === item.label
        const submenuHeight = submenuRefs.current[item.label]?.scrollHeight || 0

        return (
            <div
                key={itemIndex}
                className={`
                    p-menuitem-content rounded relative 
                    ${collapsed ? 'justify-center mb-12' : 'mb-7'} 
                    transition-all duration-300
                `}
                style={{
                    marginBottom: isActive ? submenuHeight + 16 : undefined,
                }}
            >
                <div
                    className={`flex align-items-center p-menuitem-link py-2 cursor-pointer ${activeSubmenuParent === item.label ? 'bg-brick text-white py-5 rounded-2xl' : ''
                        }`}
                    onClick={() => {
                        if (item.items) toggleSubmenu(item.label)
                    }}
                >
                    <Link to={item.url} className="flex ps-4 align-items-center no-underline text-blackPure">
                        <span className={`${item.icon} ${isActive ? 'text-white' : ''}`} />
                        <span
                            className={`me-2 ms-4 font-normal transition-opacity duration-300 ${isActive ? 'text-white' : ''
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                    {item.items && !collapsed && (
                        <span
                            className={`pi ${isActive ? 'pi-angle-down text-white' : 'pi-angle-right'} ms-auto text-gray-500`}
                        />
                    )}
                </div>

                {item.items && isActive && !collapsed && (
                    <div
                        ref={(el) => (submenuRefs.current[item.label] = el)}
                        className={`
                            absolute left-0 w-full
                            pl-11 mt-2 space-y-2 bg-neutral-100 
                            transform origin-top 
                            transition-all duration-300 ease-out 
                            ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}
                        `}
                        style={{ paddingBottom: '16px' }}
                    >
                        {item.items.map((subItem, subIndex) => (
                            <div
                                key={subIndex}
                                className="p-menuitem-content rounded transition-all duration-300"
                            >
                                <Link
                                    to={subItem.url}
                                    className="flex align-items-center p-menuitem-link py-2 no-underline text-blackPure"
                                >
                                    <span className={`${subItem.icon} me-2`} />
                                    <span className="me-2 ps-4 font-normal transition-opacity duration-300">
                                        {subItem.label}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    const top = (
        <>
            <div className={`cursor-pointer flex flex-row justify-center space-x-4 ${collapsed ? 'mx-2 my-3' : 'my-3'}`} onClick={toggleMenu}>
                <Avatar
                    image={bucky}
                    size="large"
                    shape="circle"
                    className={`${collapsed ? 'w-12 h-12' : 'w-16 h-16'} transition-all duration-300`}
                />
                <p
                    className={`font-satisfy text-2xl font-semibold mt-4 ${collapsed ? 'hidden' : ''
                        } transition-all duration-300`}
                >
                    Bucky Burger
                </p>
            </div>

            <Divider className="mb-4" />
        </>
    )

    const bottom = (
        <div className="mt-0 mx-6">
            <div className="bg-brick text-white cursor-pointer pt-2 ps-4 pe-4 pb-4 rounded">
                <i className="pi pi-barcode text-3xl"></i>
                <h4 className="text-md mt-1">Générer le rapport</h4>
                <p className="text-xs w-44 overflow-hidden -mt-2">Obtenir vos rapports en un seul clic</p>
            </div>

            <p className='mt-6 text-center text-[0.75em]'>&copy; {new Date().getFullYear()} GoKaly. {t('allRightsReserved')}</p>
        </div>
    )

    const items = [
        {
            label: 'Tableau de bord',
            icon: 'pi pi-gauge',
            template: itemRenderer,
            url: '/dashboard-resto',
            items: [
                { label: 'Tableau de bord', icon: 'pi pi-gauge', url: '/dashboard-resto' },
                { label: 'Analytique', icon: 'pi pi-chart-bar', url: '/dashboard-resto' },
                { label: 'Evaluation', icon: 'pi pi-star', url: '/dashboard-resto' },
            ],
        },
        {
            label: 'Etablissement',
            icon: 'pi pi-home',
            template: itemRenderer,
            url: '/dashboard-resto',
            items: [
                { label: 'Commande', icon: 'pi pi-receipt', url: '/dashboard-resto' },
                { label: 'Réservation de table', icon: 'pi pi-address-book', url: '/dashboard-resto' },
                { label: 'Livraison', icon: 'pi pi-truck', url: '/dashboard-resto' },
                { label: 'Facture', icon: 'pi pi-ticket', url: '/dashboard-resto' },
                { label: 'Clientèle', icon: 'pi pi-user', url: '/dashboard-resto' },
            ],
        },
        {
            label: 'Carte',
            icon: 'pi pi-clipboard',
            template: itemRenderer,
            url: '/dashboard-resto',
            items: [
                { label: 'Carte', icon: 'pi pi-clipboard', url: '/dashboard-resto' },
                { label: 'Menu', icon: 'pi pi-clipboard', url: '/dashboard-resto' },
                { label: 'Table', icon: 'pi pi-table', url: '/dashboard-resto' },
            ],
        },
        {
            label: 'CMS',
            icon: 'pi pi-objects-column',
            template: itemRenderer,
            url: '/dashboard-resto',
            items: [
                { label: 'Calendrier', icon: 'pi pi-calendar', url: '/dashboard-resto' },
                { label: 'Blog', icon: 'pi pi-book', url: '/dashboard-resto' },
                { label: 'Template', icon: 'pi pi-envelope', url: '/dashboard-resto' },
            ],
        },
        {
            label: 'Préférences',
            icon: 'pi pi-objects-column',
            template: itemRenderer,
            url: '/dashboard-resto',
            items: [
                { label: 'Thème', icon: 'pi pi-objects-column', url: '/dashboard-resto' },
                { label: 'Paramètres', icon: 'pi pi-cog', url: '/dashboard-resto' },
                { label: 'Support', icon: 'pi pi-user', url: '/dashboard-resto' },
                { label: 'Guide', icon: 'pi pi-info-circle', url: '/dashboard-resto' },
                { label: 'A propos', icon: 'pi pi-question-circle', url: '/dashboard-resto' },
            ],
        },
    ]

    return (
        <div
            ref={menuContainerRef}
            className={`
                fixed float-left z-10 
                ${collapsed ? 'w-[9vw]' : 'w-[21vw]'} 
                h-screen 
                overflow-y-auto 
                scrollbar-thin 
                scrollbar-thumb-gray-300 
                scrollbar-track-gray-100
                transition-all duration-300
            `}
        >
            <MegaMenu
                model={items}
                start={top}
                end={bottom}
                orientation="vertical"
                className={`
                    font-poppins text-sm 
                    border border-none 
                    shadow-xl 
                    h-full 
                    overflow-y-auto 
                    transition-all duration-300 
                    ${collapsed ? 'w-[5vw]' : 'w-[21vw]'}
                `}
            />
        </div>
    )
}

VMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
}

export default VMenu
