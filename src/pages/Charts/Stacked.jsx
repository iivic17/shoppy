import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import PageTemplate from '../PageTemplate';

import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '../../data/dummy';

const Stacked = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate category='Chart' title='Stacked' chartHeader='Revenue Breakdown'>
			<div className='w-full'>
				<ChartComponent
					id='stacked-page-chart'
					height='900px'
					primaryXAxis={stackedPrimaryXAxis}
					primaryYAxis={stackedPrimaryYAxis}
					fontFamily='Open Sans, sans-serif'
					legendSettings={{
						textStyle: {
							color: colorReversed,
							fontFamily: 'Open Sans, sans-serif',
							size: '20px',
						},
						background: color,
					}}
					background={color}
					chartArea={{
						border: {
							width: 0,
						},
						background: color,
					}}
					tooltip={{
						fontFamily: 'Open Sans, sans-serif',
						enable: true,
					}}>
					<Inject
						services={[StackingColumnSeries, Category, Legend, Tooltip]}
					/>
					<SeriesCollectionDirective>
						{stackedCustomSeries.map((item, index) => (
							<SeriesDirective key={index} {...item} />
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Stacked;
