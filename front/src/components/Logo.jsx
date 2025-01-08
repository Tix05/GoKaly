import PropTypes from 'prop-types'
import logo from '../assets/logo-white.png'

const Logo = ({ className }) => {
    return (
        <img src={logo} alt="GoKaly" className={`${className}`} />
    )
}

Logo.propTypes = {
    className: PropTypes.string,
}

Logo.defaultProps = {
    className: '',
}

export default Logo