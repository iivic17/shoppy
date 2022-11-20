import EarningsCard from './EarningsCard';
import EarningsDownloadCard from './EarningsDownloadCard';
import FeatureBoxGroup from './FeatureBoxGroup';
import RecentTransactionsCard from './RecentTransactionsCard';
import RevenueUpdatesCard from './RevenueUpdatesCard';
import SalesOverviewCard from './SalesOverviewCard';
import WeeklyStatsCard from './WeeklyStatsCard';

const Ecommerce = () => {
	return (
		<div id='page-ecommerce'>
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

			<div
				id='ecommerce-third-row'
				className='mt-5 w-full flex justify-center flex-col xl:flex-row items-stretch gap-6 sm:gap-3'>
				<RecentTransactionsCard />
				<SalesOverviewCard />
			</div>

			<div
				id='ecommerce-fourth-row'
				className='mt-5 w-full flex justify-center flex-col xl:flex-row items-stretch gap-6 sm:gap-3'>
				<WeeklyStatsCard />
			</div>
		</div>
	);
};

export default Ecommerce;
