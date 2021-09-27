import { Box, Flex } from '@chakra-ui/react';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { OffersList } from '../offers/OffersList';
import { Map } from '../map/Map'

interface IProps {
  offers: {title: string, pubishedAt: string, lon: number, lat: number, id: string}[]
}

export const Header = ({ offers }: IProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IProps["offers"]>(offers);
    
    const handleChange = (event: { target: HTMLInputElement; }) => {
        setSearchTerm(event.target.value);
    };


    useEffect(() => {
        let results = offers && offers?.filter(item => item?.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results)
      }, [offers, searchTerm]);


    return (
      <>
      <Flex
      height={100}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#dedede"
    >
      <Box fontSize={24}>
        <section>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} className='searchBar' />
        </section>
      </Box>
    </Flex>
    <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList offers={searchResults} />
        </Box>
        <Box flex={1}>
          <Map />
        </Box>
      </Flex>
      </>
    )
}


