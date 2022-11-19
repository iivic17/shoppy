import { GoPrimitiveDot } from 'react-icons/go';

const RevenueUpdatesHeader = () => {
	return (
		<div className='flex justify-between p-5 pt-6 flex-col sm:flex-row gap-4 sm:gap-0'>
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
	);
};

export default RevenueUpdatesHeader;
