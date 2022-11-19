import EarningsGraph from './EarningsGraph';
import EarningsPie from './EarningsPie';

const EarningsCard = () => {
	return (
		<div className='flex flex-1 flex-col'>
			<EarningsGraph />

			<EarningsPie />
		</div>
	);
};

export default EarningsCard;
