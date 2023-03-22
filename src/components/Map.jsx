import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import markerImage from "../assets/icon-location.svg";

function Map({ addressData }) {
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const getNewCoordinates = async () => {
    setIsLoading(true);

    let searchString = addressData.location.region;
    searchString = searchString.split(" ").join("+");

    const data = await fetch(
      "https://api.radar.io/v1/geocode/forward?query=" + searchString,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_RADAR_KEY,
        },
      }
    );

    const response = await data.json();
    const latitude = response.addresses[0].latitude;
    const longitude = response.addresses[0].longitude;

    setMapCoordinates({ latitude: latitude, longitude: longitude });
    setIsLoading(false);
  };

  useEffect(() => {
    getNewCoordinates();
  }, [addressData]);

  const markerIcon = new Icon({
    iconUrl: markerImage,
    iconSize: [30, 40],
    iconAnchor: [40, 90],
  });

  const position = [mapCoordinates.latitude, mapCoordinates.longitude];

  const mapContainer = (
    <MapContainer
      center={[mapCoordinates.latitude, mapCoordinates.longitude]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}></Marker>
    </MapContainer>
  );

  return (
    <div id="map" className="h-full z-10">
      {isLoading && <div>Loading...</div>}
      {!isLoading && mapContainer}
    </div>
  );
}

export default Map;
