import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface IMap {
  markers: {location: { lat: number, lng: number, }, title: string, id: string, key: string}[]
}

export const Map = ({markers}: IMap) => {
	const mapStyles = {
		height: '80vh',
    width: '60%',
    position: 'absolute',
    top: '16%',
    left: '40%'
	};

	const defaultCenter = {
		lat: markers[0]?.location.lat || 50.0618971,
		lng: markers[0]?.location.lng || 19.9367559
  };
  

	return (
		<Flex className="map-box" alignItems="center" justifyContent="center" backgroundColor="#ffffff" height="100%">
			<Box fontSize={24} >
      <LoadScript
       googleMapsApiKey='AIzaSyDRAzoJ0PKcVPrOyt5vGcc0KNKq1DX2jjc'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
          >
            {
            markers.map(item => {
              return (
              <Marker key={item.id} position={item.location} />
              )
            })
         }
          </GoogleMap>
     </LoadScript>
			</Box>
		</Flex>
	);
};
