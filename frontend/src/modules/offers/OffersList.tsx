import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { fetchOffers } from '../../utils/fetchOffers';

interface IValues {
  values: {location: { lat: number, lng: number, }, title: string, id: string, key: string},
  offer: {title: string, publishedAt: string, lon: number, lat: number, id: string}
}
interface IOffers {
  offers: {title: string, publishedAt: string, lon: number, lat: number, id: string}[],
  setMarkers: Dispatch<SetStateAction<IValues["values"][]>>
}

export const OffersList = ({offers, setMarkers}: IOffers) => {

  const handleClick = (values: IValues["values"]) => {
    const valuesArray = [values]
    setMarkers(valuesArray)}

  return (
      <Box fontSize={24} height="100%"
        width="100%"
        className="offers-container" >
        <Flex
        flexDirection="column"
        >
          {offers.length === 0 && <Box><p>No jobs found for a given term</p></Box>}
         {offers?.map((offer: IValues["offer"]) => {
           const publishedDate = (new Date(offer?.publishedAt)).toLocaleDateString()
           const publishedTime = (new Date(offer?.publishedAt)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
           return (
           <Box 
            key={offer?.id}
            flexDirection="column"
            className="offer"
            onClick={() => handleClick({location: { lat: offer.lat, lng: offer.lon, }, title: offer.title, id: offer.id, key: offer.id})}
            >
            <p className="title">{offer?.title}</p>
           <p>Published: {publishedDate}, {publishedTime}</p>
          </Box>)
         })}
        </Flex>
      </Box>
  );
};
