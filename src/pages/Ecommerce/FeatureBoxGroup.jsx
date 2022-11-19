import { earningData } from '../../data/dummy';
import FeatureBoxCard from './FeatureBoxCard';

const FeatureBoxGroup = () => {
	return (
		<div className='flex justify-center gap-1 items-stretch flex-col sm:flex-row sm:w-fit lg:w-auto w-full'>
			{earningData.map(item => (
				<FeatureBoxCard key={item.title} {...item} />
			))}
		</div>
	);
};

export default FeatureBoxGroup;
