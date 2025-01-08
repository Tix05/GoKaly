import { useState, useCallback, useRef } from 'react'
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
    const [hoveredItem, setHoveredItem] = useState(null)
    const submenuRefs = useRef({})
    const menuContainerRef = useRef(null)
    const [submenuPosition, setSubmenuPosition] = useState(null)
    const submenuTimeoutRef = useRef(null)

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
                    ${collapsed ? 'justify-center mb-8' : 'mb-7'} 
                    transition-all duration-300
                `}
                style={{
                    marginBottom: isActive ? submenuHeight + 16 : undefined,
                }}
                onMouseEnter={(e) => {
                    if (collapsed && item.items) {
                        if (submenuTimeoutRef.current) {
                            clearTimeout(submenuTimeoutRef.current)
                        }

                        setHoveredItem(item)

                        const itemElement = e.currentTarget
                        const menuContainer = menuContainerRef.current

                        if (itemElement && menuContainer) {
                            const itemRect = itemElement.getBoundingClientRect()
                            const menuRect = menuContainer.getBoundingClientRect()

                            setSubmenuPosition({
                                top: itemRect.top,
                                left: menuRect.right - 44
                            })
                        }
                    }
                }}
                onMouseLeave={() => {
                    if (collapsed) {
                        submenuTimeoutRef.current = setTimeout(() => {
                            setHoveredItem(null)
                            setSubmenuPosition(null)
                        }, 300)
                    }
                }}
            >
                {collapsed ? (
                    <div className="group relative w-full">
                        <Link
                            to={item.url}
                            className={`
                                flex justify-center items-center 
                                w-full p-2 
                                group-hover:bg-brick
                                group-hover:text-white
                                no-underline text-blackCustom 
                                rounded-lg 
                                transition-all duration-300
                            `}
                        >
                            <span
                                className={`
                                    ${item.icon} 
                                    text-lg 
                                    group-hover:text-white
                                `}
                            />
                        </Link>
                    </div>
                ) : (
                    <div
                        className={`flex align-items-center p-menuitem-link py-2 cursor-pointer ${activeSubmenuParent === item.label ? 'bg-brick text-white py-5 rounded-2xl' : ''}`}
                        onClick={() => {
                            if (item.items) toggleSubmenu(item.label)
                        }}
                    >
                        <Link to={item.url} className="flex ps-4 align-items-center no-underline text-blackPure">
                            <span className={`${item.icon} ${isActive ? 'text-white' : ''}`} />
                            {!collapsed && (
                                <span
                                    className={`me-2 ms-4 font-normal transition-opacity duration-300 ${isActive ? 'text-white' : ''}`}
                                >
                                    {item.label}
                                </span>
                            )}
                        </Link>
                        {item.items && !collapsed && (
                            <span
                                className={`pi ${isActive ? 'pi-angle-down text-white' : 'pi-angle-right'} ms-auto text-gray-500`}
                            />
                        )}
                    </div>
                )}
                {item.items && !collapsed && isActive && (
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
                                    {!collapsed && (
                                        <span className="me-2 ps-4 font-normal transition-opacity duration-300">
                                            {subItem.label}
                                        </span>
                                    )}
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
            <div
                className={`
                    ${collapsed ? 'flex justify-center items-center p-2' : 'bg-brick text-white cursor-pointer pt-2 ps-4 pe-4 pb-4 rounded'}
                `}
            >
                {collapsed ? (
                    <i className="pi pi-gift text-brick text-lg mt-28"></i>
                ) : (
                    <>
                        <i className="pi pi-barcode text-3xl"></i>
                        <h4 className="text-md mt-1">Générer le rapport</h4>
                        <p className="text-xs w-44 overflow-hidden -mt-2">Obtenir vos rapports en un seul clic</p>
                    </>
                )}
            </div>

            {!collapsed && (
                <p className='mt-6 text-center text-[0.75em]'>&copy; {new Date().getFullYear()} GoKaly. {t('allRightsReserved')}</p>
            )}
        </div>
    )

    const HoverSubmenu = () => {
        if (!collapsed || !hoveredItem || !hoveredItem.items || !submenuPosition) return null

        return (
            <div
                className="
                    fixed 
                    bg-white 
                    shadow-lg 
                    w-[200px] 
                    p-2 
                    z-50 
                    rounded-lg 
                    border 
                    border-neutral-200
                "
                style={{
                    top: `${submenuPosition.top}px`,
                    left: `${submenuPosition.left}px`,
                    maxHeight: `${hoveredItem.items.length * 50}px`,
                    overflowY: hoveredItem.items.length > 5 ? 'auto' : 'visible'
                }}
                onMouseEnter={() => {
                    if (submenuTimeoutRef.current) {
                        clearTimeout(submenuTimeoutRef.current)
                    }
                }}
                onMouseLeave={() => {
                    submenuTimeoutRef.current = setTimeout(() => {
                        setHoveredItem(null)
                        setSubmenuPosition(null)
                    }, 300)
                }}
            >
                {hoveredItem.items.map((subItem, index) => (
                    <Link
                        key={index}
                        to={subItem.url}
                        className="
                            flex 
                            items-center 
                            p-2 
                            hover:bg-neutral-100 
                            rounded-lg 
                            transition-all 
                            duration-300 
                            mb-1
                            text-black 
                            no-underline 
                            cursor-pointer
                        "
                    >
                        <span className={`${subItem.icon} me-3 text-black`} />
                        <span className="text-black font-normal text-sm">{subItem.label}</span>
                    </Link>
                ))}
            </div>
        )
    }

    const items = [
        {
            label: 'Tableau de bord',
            icon: 'pi pi-gauge',
            template: itemRenderer,
            url: '/dashboard',
            items: [
                { label: 'Tableau de bord', icon: 'pi pi-gauge', url: '/restaurant/dashboard' },
                { label: 'Analytique', icon: 'pi pi-chart-bar', url: '/dashboard' },
                { label: 'Evaluation', icon: 'pi pi-star', url: '/restaurant/review' },
            ],
        },
        {
            label: 'Etablissement',
            icon: 'pi pi-home',
            template: itemRenderer,
            url: '/dashboard',
            items: [
                { label: 'Commande', icon: 'pi pi-receipt', url: '/dashboard' },
                { label: 'Réservation de table', icon: 'pi pi-address-book', url: '/dashboard' },
                { label: 'Livraison', icon: 'pi pi-truck', url: '/dashboard' },
                { label: 'Facture', icon: 'pi pi-ticket', url: '/dashboard' },
                { label: 'Clientèle', icon: 'pi pi-user', url: '/dashboard' },
            ],
        },
        {
            label: 'Carte',
            icon: 'pi pi-clipboard',
            template: itemRenderer,
            url: '/dashboard',
            items: [
                { label: 'Carte', icon: 'pi pi-clipboard', url: '/dashboard' },
                { label: 'Menu', icon: 'pi pi-clipboard', url: '/dashboard' },
                { label: 'Table', icon: 'pi pi-table', url: '/dashboard' },
            ],
        },
        {
            label: 'CMS',
            icon: 'pi pi-objects-column',
            template: itemRenderer,
            url: '/dashboard',
            items: [
                { label: 'Calendrier', icon: 'pi pi-calendar', url: '/dashboard' },
                { label: 'Blog', icon: 'pi pi-book', url: '/dashboard' },
                { label: 'Template', icon: 'pi pi-envelope', url: '/dashboard' },
            ],
        },
        {
            label: 'Préférences',
            icon: 'pi pi-cog',
            template: itemRenderer,
            url: '/dashboard',
            items: [
                { label: 'Thème', icon: 'pi pi-objects-column', url: '/dashboard' },
                { label: 'Paramètres', icon: 'pi pi-cog', url: '/dashboard' },
                { label: 'Support', icon: 'pi pi-user', url: '/dashboard' },
                { label: 'Guide', icon: 'pi pi-info-circle', url: '/dashboard' },
                { label: 'A propos', icon: 'pi pi-question-circle', url: '/dashboard' },
            ],
        },
    ]

    return (
        <div className="flex z-30">
            <div
                ref={menuContainerRef}
                className={`
                    fixed float-left z-10 
                    ${collapsed ? 'w-[9vw] h-full' : 'w-[21vw]'} 
                    overflow-y-auto max-h-screen
                    overflow-hidden 
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
                        overflow-hidden 
                        transition-all duration-300 
                        ${collapsed ? 'w-[5vw]' : 'w-[21vw]'}
                    `}
                />
            </div>
            <HoverSubmenu />
        </div>
    )
}

VMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
}

export default VMenu
