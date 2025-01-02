import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom"
import CardStat from "../../components/restaurant/CardStat"
import RevenueSumContainer from "../../components/restaurant/RevenueSumContainer"
import OrderSumContainer from "../../components/restaurant/OrderSumContainer"

const Dashboard = () => {
    const { collapsed } = useOutletContext()

    const stats = [
        {
            title: "Total revenus (Ar)",
            value: "30,997,250",
            icon: "pi pi-wallet"
        },
        {
            title: "Total commandes",
            value: "552",
            icon: "pi pi-receipt"
        },
        {
            title: "Total réservations",
            value: "96",
            icon: "pi pi-table"
        },
        {
            title: "Total livraison",
            value: "345",
            icon: "pi pi-truck"
        },
        {
            title: "Total clients",
            value: "2 450",
            icon: "pi pi-users"
        },
    ]

    return (
        <div className={`mt-24`}
            style={{
                width: `calc(100% - ${collapsed ? '5rem' : '280px'})`,
                marginLeft: collapsed ? '5rem' : '280px',
                paddingLeft: collapsed ? '1rem' : '2rem'
            }}>
            <CardStat stats={stats} />

            <div className="mt-6 grid grid-cols-2 gap-x-4">
                <RevenueSumContainer />
                <OrderSumContainer />
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
}

export default Dashboard