import { useEffect } from 'react';
import DailyActivitiesCard from './DailyActivitiesCard';
import EarningsCard from './EarningsCard';
import EarningsDownloadCard from './EarningsDownloadCard';
import FeatureBoxGroup from './FeatureBoxGroup';
import MedicalProBrandingCard from './MedicalProBrandingCard';
import RecentTransactionsCard from './RecentTransactionsCard';
import RevenueUpdatesCard from './RevenueUpdatesCard';
import SalesOverviewCard from './SalesOverviewCard';
import WeeklyStatsCard from './WeeklyStatsCard';
import { useLocation, useNavigate } from 'react-router-dom';

const Ecommerce = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location?.pathname !== '/ecommerce') navigate('/ecommerce');
	}, []);

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
				<MedicalProBrandingCard />
				<DailyActivitiesCard />
			</div>
		</div>
	);
};

export default Ecommerce;
