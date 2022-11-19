import { Button, SparkLineChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

import { sparklineAreaData } from '../../data/dummy';

const RevenueUpdatesReport = () => {
	const { currentColor } = useStateContext();

	return (
		<div className='flex flex-col gap-10 mt-6'>
			<div>
				<p>
					<span className='text-3xl font-semibold'>$93,438</span>
					<span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
						23%
					</span>
				</p>
				<p className='text-gray-500 mt-1'>Budget</p>
			</div>
			<div>
				<p>
					<span className='text-3xl font-semibold'>$48,192</span>
				</p>
				<p className='text-gray-500 mt-1'>Expense</p>
			</div>

			<div className='mt-3'>
				<SparkLineChart
					currentColor={currentColor}
					id='line-sparkline'
					type='Line'
					height='80px'
					width='250px'
					data={sparklineAreaData}
					color={currentColor}
				/>
			</div>

			<div className='mt-0'>
				<Button
					color='white'
					bgColor={currentColor}
					text='Download Report'
					borderRadius='10px'
				/>
			</div>
		</div>
	);
};

export default RevenueUpdatesReport;
