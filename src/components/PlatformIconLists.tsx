import {
	FaWindows,
	FaAndroid,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Prop {
	platforms: Platform[];
}

const PlatformIconLists = ({ platforms }: Prop) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
	};

	return (
		<HStack marginY={1}>
			{platforms.map(platform => (
				<Icon
					key={platform.slug}
					as={iconMap[platform.slug]}
					color="gray.500"
				/>
			))}
		</HStack>
	);
};

export default PlatformIconLists;
