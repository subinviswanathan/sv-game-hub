import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenre();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map(genre => (
				<ListItem key={genre.id} paddingY="6px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							variant="link"
							fontSize="lg"
							onClick={() => onSelectGenre(genre)}
							fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
