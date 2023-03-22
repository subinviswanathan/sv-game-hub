import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectSort: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date Added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release Date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average Rating' },
	];

	const currentSort = sortOrders.find(s => s.value === sortOrder);

	return (
		<Menu>
			<MenuButton rightIcon={<BsChevronDown />} as={Button}>
				Order by: {currentSort?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map(order => (
					<MenuItem
						onClick={() => onSelectSort(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
