import { Button } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { recentTransactions, dropdownData } from '../../data/dummy';

const DropDown = ({ currentMode }) => (
	<div className='w-28 px-2 py-1 rounded-md absolute top-5 sm:top-[-4px] left-[-7px] sm:left-auto sm:right-0'>
		<DropDownListComponent
			id='time'
			fields={{ text: 'Time', value: 'Id' }}
			style={{ color: currentMode === 'dark' && 'white', border: 'none' }}
			value='1'
			dataSource={dropdownData}
			popupHeight='220px'
			popupWidth='120px'
		/>
	</div>
);

const RecentTransactionsCard = () => {
	const { currentMode, currentColor } = useStateContext();

	return (
		<div className='flex-1 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
			<div className='flex justify-between items-center gap-2 relative'>
				<p className='text-xl font-semibold'>Recent Transactions</p>
				<DropDown currentMode={currentMode} />
			</div>
			<div className='mt-10 flex flex-col w-full'>
				{recentTransactions.map(item => (
					<div key={item.title} className='flex justify-between mt-4 flex-1'>
						<div className='flex gap-4'>
							<button
								type='button'
								style={{
									color: item.iconColor,
									backgroundColor: item.iconBg,
								}}
								className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'>
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
			</div>
			<div className='flex justify-between items-center mt-5 border-t-1 border-color'>
				<div className='mt-3'>
					<Button
						color='white'
						bgColor={currentColor}
						text='Add'
						borderRadius='10px'
					/>
				</div>

				<p className='text-gray-400 text-sm'>36 Recent Transactions</p>
			</div>
		</div>
	);
};

export default RecentTransactionsCard;
