import { StackedChart } from '../../components';
import RevenueUpdatesHeader from './RevenueUpdatesHeader';

import RevenueUpdatesReport from './RevenueUpdatesReport';

const RevenueUpdatesCard = () => {
	return (
		<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl w-full'>
			<RevenueUpdatesHeader />

			<div className='flex gap-10 sm:gap-6 sm:justify-between px-5 pt-6 pb-0 flex-col sm:flex-row justify-center sm:items-stretch'>
				<RevenueUpdatesReport />

				<StackedChart width='400px' height='150px' />
			</div>
		</div>
	);
};

export default RevenueUpdatesCard;
