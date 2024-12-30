"use client";

import React from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "./leaflet.css";

const OurLocationMap = () => {
  return (
    <div className="relative w-full h-[40rem] flex items-start justify-start">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="w-full h-full rounded-3xl outline-none"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
};

export default OurLocationMap;
