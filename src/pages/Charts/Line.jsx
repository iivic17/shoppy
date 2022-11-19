import { LineChart } from '../../components';
import PageTemplate from '../PageTemplate';

const Line = () => {
	return (
		<PageTemplate category='Chart' title='Line' chartHeader='Inflation Rate'>
			<div className='w-full'>
				<LineChart />
			</div>
		</PageTemplate>
	);
};

export default Line;
