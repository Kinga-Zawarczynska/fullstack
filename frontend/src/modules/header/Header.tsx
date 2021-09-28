import { Box, Flex, Button } from '@chakra-ui/react';
import React, { useState, Dispatch, SetStateAction } from 'react';

interface IProps {
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setSearchTerm }: IProps) => {
	const [ term, setTerm ] = useState<string>('');

	const handleChange = (event: { target: HTMLInputElement }) => {
		setTerm(event.target.value);
	};

	const handleOnClick = () => {
		setSearchTerm(term);
	};

	return (
		<Flex height={100} alignItems="center" justifyContent="center" backgroundColor="#9D4683">
			<Box fontSize={24} className="search">
				<input type="text" placeholder="Search" value={term} onChange={handleChange} className="searchBar" />
				<Button
					size="md"
					className="button"
					variant="solid"
					height="30px"
					width="100px"
					border="2px"
					onClick={handleOnClick}
				>
					Submit
				</Button>
			</Box>
		</Flex>
	);
};
