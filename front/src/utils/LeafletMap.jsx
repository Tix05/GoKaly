import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const LeafletMap = () => {
    const position = [-18.8792, 47.5079] 

    return (
        <>
             <MapContainer center={position} zoom={13} style={{ height: "235px", width: "80%" }}>
             <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Tend M 
                    </Popup>
                </Marker>
             </MapContainer>
        </>
    )
}

export default LeafletMap
