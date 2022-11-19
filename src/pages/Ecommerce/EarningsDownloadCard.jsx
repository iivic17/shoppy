import { Button } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const EarningsDownloadCard = () => {
	const { currentColor } = useStateContext();

	return (
		<div
			id='earnings-download-card'
			className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl flex-1 p-8 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
			<div className='flex justify-between items-center'>
				<div>
					<p className='font-bold text-gray-400'>Earnings</p>
					<p className='text-2xl'>$63,448.78</p>
				</div>
			</div>
			<div className='mt-6'>
				<Button
					color='white'
					bgColor={currentColor}
					text='Download'
					borderRadius='10px'
					size='md'
				/>
			</div>
		</div>
	);
};

export default EarningsDownloadCard;
