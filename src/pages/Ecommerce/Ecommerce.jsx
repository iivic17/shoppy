import EarningsCard from './EarningsCard';
import EarningsDownloadCard from './EarningsDownloadCard';
import FeatureBoxGroup from './FeatureBoxGroup';
import RevenueUpdatesCard from './RevenueUpdatesCard';

const Ecommerce = () => {
	return (
		<div
			id='page-ecommerce'
			className='my-[3rem] sm:my-[6rem] md:my-10 w-full mx-3 sm:max-w-3xl md:max-w-4xl ld:max-w-5xl xl:max-w-6xl sm:mx-auto p-5 sm:p-10 sm:pt-0'>
			<div
				id='ecommerce-first-row'
				className='flex-1 flex justify-center flex-col xl:flex-row items-stretch gap-6 sm:gap-3 overflow-auto'>
				<EarningsDownloadCard />
				<FeatureBoxGroup />
			</div>

			<div
				id='ecommerce-second-row'
				className='mt-5 w-full flex justify-center flex-col xl:flex-row items-stretch gap-6 sm:gap-3'>
				<RevenueUpdatesCard />
				<EarningsCard />
			</div>
		</div>
	);
};

export default Ecommerce;
