import { SparkLineChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { sparklineAreaData } from '../../data/dummy';

const EarningsGraph = () => {
	const { currentColor } = useStateContext();

	return (
		<div
			className='rounded-2xl w-600 xl:w-400 p-4'
			style={{ backgroundColor: currentColor }}>
			<div className='flex justify-between items-center '>
				<p className='font-semibold text-white text-2xl'>Earnings</p>

				<div>
					<p className='text-2xl text-white font-semibold mt-8'>$63,448.78</p>
					<p className='text-gray-200'>Monthly revenue</p>
				</div>
			</div>

			<div className='mt-4 flex items-center justify-center'>
				<SparkLineChart
					currentColor={currentColor}
					id='column-sparkLine'
					height='210px'
					type='Column'
					data={sparklineAreaData}
					width='320'
					color='rgb(242, 252, 253)'
				/>
			</div>
		</div>
	);
};

export default EarningsGraph;
