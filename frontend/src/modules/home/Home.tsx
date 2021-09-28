import { Box, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';
import { fetchOffers } from '../../utils/fetchOffers';

interface IHome {
  searchTerm: string,
  offers: {title: string, publishedAt: string, lon: number, lat: number, id: string}[],
  markers: {location: { lat: number, lng: number, }, title: string, id: string, key: string}[]
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<IHome["searchTerm"]>("")
  const [offers, setOffers] = useState<IHome["offers"]>([])
  const [markers, setMarkers] = useState<IHome["markers"]>([])

  useEffect(() => {
    searchTerm ? fetchOffers(searchTerm).then(fetchedOffers => setOffers(fetchedOffers[0])) : fetchOffers().then(fetchedOffers => setOffers(fetchedOffers[0]))
  }, [searchTerm]);

  useEffect(() => {
    const markers = offers.map(item => ({
      location: {
        lat: item.lat,
        lng: item.lon
      },
      id: item.id,
      title: item.title,
      key: item.id
  }))

  setMarkers(markers)
    return () => {
      setMarkers([])
    }
  }, [offers])
  
  return (
    <Flex height="100%" flexDirection="column">
      <Header setSearchTerm={setSearchTerm} />
      <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList offers={offers} setMarkers={setMarkers} />
        </Box>
        <Box flex={1}>
          <Map markers={markers} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
