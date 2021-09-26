import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex
      height={100}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#dedede"
    >
      <Box fontSize={24}>Header</Box>
    </Flex>
  );
};
