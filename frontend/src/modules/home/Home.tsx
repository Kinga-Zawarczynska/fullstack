import { Box, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';
import { fetchOffers } from '../../utils/fetchOffers';

interface IOffers {
  offers: {title: string, pubishedAt: string, lon: number, lat: number, id: string}[]
}

const Home = () => {
  const [offers, setOffers] = useState<IOffers["offers"]>([])
  useEffect(() => {
    fetchOffers().then(fetchedOffers => setOffers(fetchedOffers[0]))
  }, []);

  return (
    <Flex height="100%" flexDirection="column">
      <Header offers={offers} />
    </Flex>
  );
};

export default Home;
