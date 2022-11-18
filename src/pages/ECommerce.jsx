import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { StackedChart, PieChart, Button, SparkLineChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

import { earningData, sparklineAreaData, ecomPieChartData } from '../data/dummy';

const Ecommerce = () => {
	return (
		<div className='mt-24 max-w-7xl mx-auto'>
			<div className='flex justify-center flex-col xl:flex-row'>
				<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl flex-1 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
					<div className='flex justify-between items-center'>
						<div>
							<p className='font-bold text-gray-400'>Earnings</p>
							<p className='text-2xl'>$63,448.78</p>
						</div>
					</div>
					<div className='mt-6'>
						<Button
							color='white'
							bgColor='blue'
							text='Download'
							borderRadius='10px'
							size='md'
						/>
					</div>
				</div>

				<div className='flex m-3 justify-center gap-2 items-center flex-col sm:flex-row'>
					{earningData.map(item => (
						<div
							key={item.title}
							className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full min-w-[12rem] p-4 pt-9 rounded-2xl flex flex-col items-center'>
							<button
								type='button'
								style={{
									color: item.iconColor,
									backgroundColor: item.iconBg,
								}}
								className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
								{item.icon}
							</button>
							<p className='mt-3'>
								<span className='text-lg font-semibold'>
									{item.amount}
								</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>
									{item.percentage}
								</span>
							</p>
							<p className='text-sm text-gray-400 mt-1'>{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className='flex gap-10 flex-wrap justify-center'>
				<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full'>
					<div className='flex justify-between p-5 pt-6'>
						<p className='font-semibold text-xl'>Revenue Updates</p>
						<div className='flex items-center gap-4'>
							<p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
							<p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>

					<div className='mt-10 flex gap-10 flex-wrap sm:justify-between px-8 pt-9 pb-2 flex-col sm:flex-row justify-center items-center sm:items-stretch'>
						<div>
							<div>
								<p>
									<span className='text-3xl font-semibold'>
										$93,438
									</span>
									<span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
										23%
									</span>
								</p>
								<p className='text-gray-500 mt-1'>Budget</p>
							</div>
							<div className='mt-8'>
								<p>
									<span className='text-3xl font-semibold'>
										$48,192
									</span>
								</p>
								<p className='text-gray-500 mt-1'>Expense</p>
							</div>

							<div className='mt-5'>
								<SparkLineChart
									currentColor='blue'
									id='line-sparkline'
									type='Line'
									height='80px'
									width='250px'
									data={sparklineAreaData}
									color='blue'
								/>
							</div>

							<div className='mt-10'>
								<Button
									color='white'
									bgColor='blue'
									text='Download Report'
									borderRadius='10px'
								/>
							</div>
						</div>

						<div className='border-r-1 border-color mb-10' />

						<div>
							<StackedChart width='320px' height='360px' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;
