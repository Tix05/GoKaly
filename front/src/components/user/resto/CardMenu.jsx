import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import PropTypes from 'prop-types'

const CardMenu = ({menu}) => {
    return (
        <div className="card-container shadow-lg" title = {menu.title}>
            <img src={menu.imgMenu} alt={menu.title} className="card-image" />
            <div className="card-overlay">
                <div className="flex justify-between items-center">
                    <div className='mt-2'>
                        <h3 className="text-white text-base font-semibold truncate">{menu.title}</h3>
                        <p className="text-white text-[0.8em] -mt-5">{menu.category}</p>
                        <p className="text-white text-lg font-kanit font-semibold -mt-2">{menu.price}</p>
                    </div>
                    <Link to="/menu-detail" className="text-white text-sm absolute bottom-0 right-2">
                        <FaEye/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

CardMenu.propTypes = {
    menu: PropTypes.object.isRequired
}

export default CardMenu