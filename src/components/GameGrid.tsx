import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	const { error, games } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				spacing={10}
				padding="10px"
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 5,
				}}
			>
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
