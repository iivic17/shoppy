import { SparkLineChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';

import { weeklyStats, sparklineAreaData } from '../../data/dummy';

const WeeklyStatsCard = () => {
	const { currentColor } = useStateContext();

	return (
		<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 pb-6 lg:pb-9 flex-1'>
			<div className='flex justify-between'>
				<p className='text-xl font-semibold'>Weekly Stats</p>
				<button type='button' className='text-xl font-semibold text-gray-500'>
					<IoIosMore />
				</button>
			</div>

			<div className='mt-10 flex flex-col gap-3'>
				{weeklyStats.map(item => (
					<div key={item.title} className='flex justify-between mt-4 w-full'>
						<div className='flex gap-4'>
							<button
								type='button'
								style={{ background: item.iconBg }}
								className='text-2xl hover:drop-shadow-xl text-white rounded-full p-3'>
								{item.icon}
							</button>
							<div>
								<p className='text-md font-semibold'>{item.title}</p>
								<p className='text-sm text-gray-400'>{item.desc}</p>
							</div>
						</div>

						<p className={`text-${item.pcColor}`}>{item.amount}</p>
					</div>
				))}
				<div className='mt-6 lg:mt-auto pt-6'>
					<SparkLineChart
						currentColor={currentColor}
						id='area-sparkLine'
						height='160px'
						type='Area'
						data={sparklineAreaData}
						width='auto'
						color='rgb(242, 252, 253, .3)'
					/>
				</div>
			</div>
		</div>
	);
};

export default WeeklyStatsCard;
