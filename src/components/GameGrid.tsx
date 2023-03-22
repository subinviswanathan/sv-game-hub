import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenre';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { error, data: games, isLoading } = useGames(selectedGenre);
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
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
