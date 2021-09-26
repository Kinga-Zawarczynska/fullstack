import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export const OffersList = () => {
  useEffect(() => {
    // TODO Here you might make a proper request from http://localhost:3001
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="#19a56f"
      height="100%"
    >
      <Box fontSize={24}>List</Box>
    </Flex>
  );
};
