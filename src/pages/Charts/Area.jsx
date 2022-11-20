import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import PageTemplate from '../PageTemplate';
import { useStateContext } from '../../contexts/ContextProvider';

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';

const Area = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate
			category='Chart'
			title='Area'
			chartHeader='Inflation Rate in Percentage'>
			<div className='w-full'>
				<ChartComponent
					id='line-chart'
					height='900px'
					primaryXAxis={areaPrimaryXAxis}
					primaryYAxis={areaPrimaryYAxis}
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
					<Inject services={[SplineAreaSeries, DateTime, Legend]} />
					<SeriesCollectionDirective>
						{areaCustomSeries.map(item => (
							<SeriesDirective key={item.name} {...item} />
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Area;
