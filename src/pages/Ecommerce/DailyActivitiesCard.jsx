import { useStateContext } from '../../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import product9 from '../../data/product9.jpg';
import { Button } from '../../components';

const DailyActivitiesCard = () => {
	const { currentColor } = useStateContext();

	return (
		<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 pb-8 flex-1'>
			<div className='flex justify-between'>
				<p className='text-xl font-semibold'>Daily Activities</p>
				<button type='button' className='text-xl font-semibold text-gray-500'>
					<IoIosMore />
				</button>
			</div>
			<div className='mt-10 flex flex-col'>
				<img className='md:w-96 h-50 ' src={product9} alt='' />
				<div className='mt-8'>
					<p className='font-semibold text-lg'>React 18 coming soon!</p>
					<p className='text-gray-400 '>By Johnathan Doe</p>
					<p className='mt-8 text-sm text-gray-400'>
						This will be the small description for the news you have shown
						here. There could be some great info.
					</p>
					<div className='mt-6 lg:mt-auto pt-6'>
						<Button
							color='white'
							bgColor={currentColor}
							text='Read More'
							borderRadius='10px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DailyActivitiesCard;
