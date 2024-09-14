import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

function Map() {
    const position = {
        lat: -34.62741964456154,
        lng: -58.481060476367674,
    };

return (
    <MapContainer center={[position.lat,position.lng]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Marker position={position}>
        <Popup>Papelera Cesar <br /> Distribuidor de Bolasas</Popup>
    </Marker>
    </MapContainer>
);
}

export default Map;