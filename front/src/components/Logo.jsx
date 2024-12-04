import PropTypes from 'prop-types'
import logo from '../assets/logo.png'

const Logo = ({ className }) => {
    return (
        <img src={logo} alt="GoKaly" className={`w-28 h-28 ${className}`} />
    )
}

Logo.propTypes = {
    className: PropTypes.string,
}

Logo.defaultProps = {
    className: '',
}

export default Logo