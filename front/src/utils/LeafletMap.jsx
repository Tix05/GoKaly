import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

const LeafletMap = ({ lat, long, place, width }) => {
    const position = [lat, long]

    return (
        <MapContainer 
            center={position} 
            zoom={13} 
            style={{ width: width, height: "235px", zIndex: "40" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    {place}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

LeafletMap.propTypes = {
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
    width: PropTypes.string,
}

LeafletMap.defaultProps = {
    width: "100%",
}

export default LeafletMap
