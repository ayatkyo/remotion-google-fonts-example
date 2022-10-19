import { Composition } from 'remotion';
import { GoogleFontsDemo } from './GoogleFonts';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="GoogleFonts"
				component={GoogleFontsDemo}
				durationInFrames={350}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
