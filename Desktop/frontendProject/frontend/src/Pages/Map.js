import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import restaurantsData from "./restaurants.json";
import AlaenPic from "../src/assets/Alaen.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxhZW4iLCJhIjoiY2xsa3ZwZjR6Mjg3NDNxbjExbzNnenBwaCJ9.T03PRkp-CXfXIE8eTYnX8w";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [status, setStatus] = useState(null);
  const [newLat, setNewLat] = useState(0);
  const [newLng, setNewLng] = useState(0);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setNewLat(lat);
          setNewLng(lng);

          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: 13, // Start with a lower zoom level
          });

          map.current.on("load", () => {
            // Use easeTo for a smooth zoom and center transition after the map is loaded
            map.current.easeTo({
              center: [lng, lat],
              zoom: 14, // Set your desired zoom level here
              duration: 1000, // Duration of the animation in milliseconds
            });
            restaurantsData.forEach((restaurant) => {
              const marker = new mapboxgl.Marker()
                .setLngLat([restaurant.longitude, restaurant.latitude])
                .addTo(map.current);
              // Create a popup for the restaurant

              // Create a popup for the restaurant
              const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
              }).setHTML(
                `<h3>${restaurant.name}</h3>><img src="${restaurant.image}" alt="${restaurant.name}" />`
              );

              // Attach the popup to the marker
              marker.setPopup(popup);
            });
            // use current location
            const youAreHereIcon = document.createElement("div");
            youAreHereIcon.className = "custom-marker";

            const youAreHereMarker = new mapboxgl.Marker({
              element: youAreHereIcon,
            })
              .setLngLat([lng, lat])
              .addTo(map.current);

            const youAreHerePopup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false,
            }).setHTML(
              `<div style="width: 100px"><p>You are here!</p> <img style=" width:100px" src=${AlaenPic} alt="" /></div>`
            );

            youAreHereMarker.setPopup(youAreHerePopup);
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <div className="">
        <div className="sidebar">

        Longitude: {newLng.toFixed(4)} | Latitude: {newLat.toFixed(4)}
        </div>
      <div className="getLocation">
        <button onClick={getLocation}>
          
        </button>
      </div>
      </div>
      <div ref={mapContainer} className="map-container" />
      <div>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {newLat && <p>Latitude: {newLat}</p>}
        {newLng && <p>Longitude: {newLng}</p>}
      </div>
    </div>
  );
}
