import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenre';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { error, data: games, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error}</Text>;

	return (
		<SimpleGrid
			spacing={6}
			padding="10px"
			columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4,
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
	);
};

export default GameGrid;
