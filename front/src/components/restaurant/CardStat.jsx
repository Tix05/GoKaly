import PropTypes from 'prop-types'

const CardStat = ({ stats }) => {
    return (
        <div className="grid grid-cols-5 gap-x-2 me-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-3 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex-grow">
                        <p className="text-[0.9em] text-neutral-500 font-poppins">{stat.title}</p>
                        <h3 className="text-lg font-semibold text-neutral-800 font-poppins -mt-1">{stat.value}</h3>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-teal bg-opacity-10 rounded-full">
                        <i className={`${stat.icon} text-brick text-2xl`}></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

CardStat.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CardStat