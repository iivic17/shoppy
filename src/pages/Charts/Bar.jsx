import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	Tooltip,
	ColumnSeries,
	DataLabel,
} from '@syncfusion/ej2-react-charts';
import PageTemplate from '../PageTemplate';
import { useStateContext } from '../../contexts/ContextProvider';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

const Bar = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate
			category='Chart'
			title='Bar'
			chartHeader='Olympic Medal Counts - RIO'>
			<div className='w-full'>
				<ChartComponent
					id='bar-page-chart'
					height='900px'
					primaryXAxis={barPrimaryXAxis}
					primaryYAxis={barPrimaryYAxis}
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
					}}>
					<Inject
						services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
					/>
					<SeriesCollectionDirective>
						{barCustomSeries.map((item, index) => (
							<SeriesDirective key={index} {...item} />
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Bar;
