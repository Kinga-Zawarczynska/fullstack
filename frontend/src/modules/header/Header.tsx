import { Box, Flex, Button } from '@chakra-ui/react';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface IProps {
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setSearchTerm }: IProps) => {
	const [ term, setTerm ] = useState<string>('');

	const handleChange = (event: { target: HTMLInputElement }) => {
		setTerm(event.target.value);
  };
  
  const handleOnClick = () => {
    setSearchTerm(term)
  }

	// useEffect(() => {
	//     let results = offers && offers?.filter(item => item?.title.toLowerCase().includes(searchTerm.toLowerCase()))
	//     setSearchResults(results)
	//   }, [offers, searchTerm]);

	return (
		<Flex height={100} alignItems="center" justifyContent="center" backgroundColor="#dedede">
			<Box fontSize={24}>
				<section>
					<input
						type="text"
						placeholder="Search"
						value={term}
						onChange={handleChange}
						className="searchBar"
					/>
					<Button loadingText="Submitting" colorScheme="teal" variant="outline" onClick={handleOnClick}>
						Submit
					</Button>
				</section>
			</Box>
		</Flex>
	);
};
