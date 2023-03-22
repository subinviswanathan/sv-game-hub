import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const { error, data: games, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				spacing={3}
				padding="10px"
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 5,
				}}
			>
				{isLoading &&
					skeletons.map(skeleton => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
