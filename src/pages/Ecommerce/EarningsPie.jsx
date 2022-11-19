import { PieChart } from '../../components';
import { ecomPieChartData } from '../../data/dummy';

const EarningsPie = () => {
	return (
		<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-600 xl:w-400 p-8 flex justify-center items-center gap-10'>
			<div>
				<p className='text-2xl font-semibold '>$43,246</p>
				<p className='text-gray-400'>Yearly sales</p>
			</div>

			<div className='w-40'>
				<PieChart
					id='pie-chart'
					data={ecomPieChartData}
					legendVisiblity={false}
					height='160px'
				/>
			</div>
		</div>
	);
};

export default EarningsPie;
