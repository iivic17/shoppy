import { LineChart } from '../../components';
import DropDown from '../../components/DropDown';
import { useStateContext } from '../../contexts/ContextProvider';

import { dropdownData } from '../../data/dummy';

const SalesOverviewCard = () => {
	const { currentMode } = useStateContext();

	return (
		<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-full flex-1'>
			<div className='flex justify-between items-center gap-2 mb-10 relative'>
				<p className='text-xl font-semibold'>Sales Overview</p>
				<DropDown currentMode={currentMode} data={dropdownData} />
			</div>
			<div className='md:w-full overflow-auto'>
				<LineChart />
			</div>
		</div>
	);
};

export default SalesOverviewCard;
