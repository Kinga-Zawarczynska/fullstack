import { Box, Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';
import { fetchOffers } from '../../utils/fetchOffers';

interface ISearchTerm {
  searchTerm: string
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<ISearchTerm["searchTerm"]>("")
  
  return (
    <Flex height="100%" flexDirection="column">
      <Header setSearchTerm={setSearchTerm} />
      <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList searchTerm={searchTerm} />
        </Box>
        <Box flex={1}>
          <Map />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
