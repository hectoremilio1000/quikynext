import React, { useEffect, useMemo, useState } from "react";
import { useLoadScript, GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';

const Sucursales = () => {

  const cdmxCoords = { lat: 19.4326, lng: -99.1332 };



  const libraries = useMemo(() => ['places'], []);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAs5yNiT4d2CJWVSVlRhP1kok7zJeOf_2g',
    libraries: libraries,
  });

  const sucursales = [
    { index: '1', name: 'Central de Abastos', location: { lat: 17.05861512471782, lng: -96.73267479074806 }, address: ' CENTRAL DE ABASTOS ZONA SECA MODULO H, LOCAL 12B, Central de Abasto, 68090 Oaxaca de Juárez, Oax.', image: 'https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/11516574/baabcf66.jpg' },
    { index: '2', name: 'Oaxaca Centro', location: { lat: 17.061675657841914, lng: -96.72769229256271 }, address: 'Miguel Hidalgo 417-B, Zona Lunes Feb 09, Centro, 68000 Oaxaca de Juárez, Oax.', image: 'https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/11516574/baabcf66.jpg' }
  ]

  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapCenter = { lat: 17.05861512471782, lng: -96.73267479074806 }

  const onShow = (location) => {
    setSelectedLocation(location);
    console.log(location);
  }


  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  }), []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }


  return (
    <div className="">
      <div className="rowQh">
        <h1 className="title1Model text-center">Nuestras Sucursales</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sucursales.map((sucursal, index) => (
          <div key={index} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-18 w-12" src={sucursal.image} alt={sucursal.name} />
            </div>
            <div>
              <div className="text-xl font-medium text-black">{sucursal.name}</div>
              <p className="text-gray-500">{sucursal.address}</p>
              <button onClick={() => onShow(sucursal.location)} className="mt-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500">
                Ver en el mapa
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="rowQh">
      {selectedLocation &&
          <div style={{ width: '100%' }}>
            <GoogleMap
              
              options={mapOptions}
              zoom={12}
              center={mapCenter}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{ width: '100%', height: '400px' }}
            >
              <MarkerF
                key={selectedLocation.index}
                position={selectedLocation}
              />
            </GoogleMap>
          </div>
        } 
      </div>
      
    </div>

    
  )
  
};

export default Sucursales;
