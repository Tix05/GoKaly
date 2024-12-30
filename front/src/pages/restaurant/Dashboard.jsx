import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom"

const Dashboard = () => {
    const { collapsed } = useOutletContext()

    return (
        <div className={`mt-24`}
            style={{
                width: `calc(100% - ${collapsed ? '5rem' : '280px'})`,
                marginLeft: collapsed ? '5rem' : '280px',
                paddingLeft: collapsed ? '1rem' : '2rem'
            }}>
        </div>
    )
}

Dashboard.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
}

export default Dashboard