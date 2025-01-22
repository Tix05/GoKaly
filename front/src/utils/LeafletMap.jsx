import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

const LeafletMap = ({ points, width }) => {
    return (
        <MapContainer 
            center={points.length > 0 ? [points[0].lat, points[0].long] : [0, 0]} 
            zoom={13} 
            style={{ width: width, height: "235px", zIndex: "40" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((point, index) => (
                <Marker key={index} position={[point.lat, point.long]}>
                    <Popup>{point.place}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

LeafletMap.propTypes = {
    points: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number.isRequired,
            long: PropTypes.number.isRequired,
            place: PropTypes.string,
        })
    ).isRequired,
    width: PropTypes.string,
}

LeafletMap.defaultProps = {
    width: "100%",
}

export default LeafletMap
