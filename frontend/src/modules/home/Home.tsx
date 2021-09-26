import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';

const Home = () => {

  return (
    <Flex height="100%" flexDirection="column">
      <Header />
      <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList />
        </Box>
        <Box flex={1}>
          <Map />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
