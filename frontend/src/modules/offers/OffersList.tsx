import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  offers: {title: string, pubishedAt: string, lon: number, lat: number, id: string}[]
}
export const OffersList = ({offers}: IProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      height="100%"
      width="100%"
      className="offers-container"
    >
      <Box fontSize={24}>
        <Flex
        flexDirection="column"
        >
          {!offers && <Box><p>No jobs found for a given term</p></Box>}
         {offers?.map((offer: any) => {
           const publishedDate = (new Date(offer?.publishedAt)).toLocaleDateString()
           const publishedTime = (new Date(offer?.publishedAt)).toLocaleTimeString()
           return (
           <Box 
            key={offer?.id}
            flexDirection="column"
            className="offer" >
            <p className="title">{offer?.title}</p>
           <p>Published: {publishedDate}, {publishedTime}</p>
          </Box>)
         })}
        </Flex>
      </Box>
    </Flex>
  );
};
