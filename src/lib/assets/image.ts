import lying_in_grass from './_files/images/keep-for-type/lying_in_grass.webp?enhanced';
import birch from './birch';
import illustration from './illustration';
import placeholder from './placeholder';

type EnhancedImg = typeof lying_in_grass;

const image = {
	placeholder,
	birch,
	illustration
};

export default image;

export type { EnhancedImg };
