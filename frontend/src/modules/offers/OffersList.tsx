import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fetchOffers } from '../../utils/fetchOffers';

interface IProps {
  searchTerm: string
}
interface IOffers {
  offers: {title: string, pubishedAt: string, lon: number, lat: number, id: string}[],
}

export const OffersList = ({searchTerm}: IProps) => {
const [offers, setOffers] = useState<IOffers["offers"]>([])

  useEffect(() => {
    searchTerm ? fetchOffers(searchTerm).then(fetchedOffers => setOffers(fetchedOffers[0])) : fetchOffers().then(fetchedOffers => setOffers(fetchedOffers[0]))
  }, [searchTerm]);

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
          {offers.length === 0 && <Box><p>No jobs found for a given term</p></Box>}
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
